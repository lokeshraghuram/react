import React, { Component } from 'react';
import Person from './Person/Person';
import './Person/Person.css';
import './App.css';
import Radium from 'radium';

class App extends Component {

  state = {
    persons : [
      { id: 1, name : "Lokesh", age: 39 },
      { id: 2, name : "Raghuram", age: 49 },
      { id: 3, name : "Muppana", age: 59 }
    ],
    showPersons: false
  }

  switchHandler = ( newName ) => {
    console.log('Clicked');
    this.setState( {persons: [
      { name : newName, age: 29 },
      { name : "Raghuram", age: 49 },
      { name : "M", age: 59 }
    ]}  );
    //this.state.persons[0].name="Loki";
  }

  deletePersonHandler = ( personIndex ) => {
    const persons = this.state.persons.slice();
    // Spread Operator
    // const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangeHandler = ( event, personId ) => {
    
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === personId
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
    
    //console.log(this.state.persons);
    /* console.log('Change Clicked');
    this.setState( {persons: [
      { name : 'Lokesh', age: 29 },
      { name : event.target.value, age: 499 },
      { name : "M", age: 59 }
    ]}  ); */
    /* console.log(this.state.persons); This does not return updated state. 
    setState() does not immediately mutate this.state but creates a pending state transition. 
    Accessing this.state after calling this method can potentially return the existing value. 
    There is no guarantee of synchronous operation of calls to setState and calls may be batched for performance gains */

    /* To log updated state immediately, use callback of setState() */
     /* this.setState( {persons: [
      { name : 'Lokesh', age: 29 },
      { name : event.target.value, age: 499 },
      { name : "M", age: 59 }
    ]}, () => {
      console.log(this.state.persons);
    }  ); */
  }

  togglePersonsHandler = () => {
      // this.setState( {showPersons: !this.state.showPersons});
      const doesShow = this.state.showPersons;
      this.setState( {showPersons: !doesShow} );
  }

  render() {

    const style = {
      font: 'inherit',
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid blue',
      padding: '8px',
      curser: 'pointer',
      ':hover':   {
        backgroundColor: 'lightgreen',
        color: 'black',
      }
    }

    let persons = null;

    if ( this.state.showPersons ) {
      if(this.state.persons.length > 0) {
        persons = (
          <div>
            {
              this.state.persons.map( (person, index) => {
                return <Person 
                  click={() => this.deletePersonHandler(index)}
                  changed={(event) => this.nameChangeHandler(event, person.id)}
                  name={person.name}
                  age={person.age} 
                  key={person.id}  />
              })
            }
          </div>
        );
      }

      if(this.state.persons.length === 0) {
        persons = (
          <div><p>All Persons are deleted</p></div>
        );
      }

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes = [];

    if( this.state.showPersons === false ) {
      classes.push('green');
    } else {  
      if ( this.state.persons.length >=1 ){
        classes.push('bold');
      }
      if ( this.state.persons.length >=2 ){
        //classes.pop('orange');
        classes.push('red');
      }
    }

    return (
      <div className="App">
        <h1>Hi Lokesh</h1>
        <button 
          //className={classes.join(' ')}
          style={style}
          //onClick={this.switchHandler.bind(this, 'Lok!!')}
          onClick={this.togglePersonsHandler} 
        >Show Persons</button>
        
        {persons}

      </div>
    );
  }
}

export default Radium(App);
