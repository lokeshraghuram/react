import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {

  state = {
    company: "TCS"
  }

  switchCompany = () => {
    this.setState(
      {company: "DTCC"}
    );
  }

  enterCompany = ( event ) => {
    this.setState(
      {company: event.target.value}
    );
  }

  render() {
    return (
      <div>
        <UserInput 
          company={this.state.company}
          click={this.enterCompany}
        />
        
        <UserOutput 
          company={this.state.company}
          years={8.5}
          click={this.switchCompany}
        />

      </div>
    );
  }
}

export default App;
