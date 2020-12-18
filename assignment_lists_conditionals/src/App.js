import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import './App.css';
import './Char/Char.css';

class App extends Component {

  state = {
    text: ''
  };

  changeHandler = (event) => {
      console.log(event.target.value);
      const text = event.target.value;
      this.setState({text: text});
  }

  deleteCharHandler = ( index ) => {
    const text = this.state.text.slice();
    const textArray = text.split("");
    textArray.splice(index, 1);
    const updatedText = textArray.join("");

    console.log("updated text:"+ updatedText);
    this.setState({text: updatedText});
  }

  render() {

    let validationComp = (
      <div>
        <input type="text" 
          value={this.state.text} 
          onChange={(event) => this.changeHandler(event)}/>
        
        {this.state.text.length>0 ? <Validation textLength={this.state.text.length}/> : null}
      </div>
    );

    const letter = this.state.text;

    let charComponents = null;

    // for (let i = 0; i < letter.length; i++) { 
    //   console.log(letter.charAt(i)); 
    // }

    /* charComponents = (
      <div className="charComp"> 
        <Char name={"lokesh"}/>
      </div>
    ) */

    charComponents = (
        letter.split("").map((character, index) => {
            return ( 
              <Char 
                key={index}
                name={character}
                click={() => this.deleteCharHandler(index)}
              /> 
            );
        })
    );

    return (
      <div>
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <hr />
        {validationComp}
        {charComponents}
      </div>
    );
  }
}

export default App;
