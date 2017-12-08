import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const helloWorld = 'Welcome to the Road to learn React';
    const user = {
      firstName: 'Sam',
      lastName: 'Scheffler'
    }

    return (
      <div className="App">
        <h2>{helloWorld}--my name is {user.firstName} {user.lastName}</h2>
      </div>
    );
  }
}

export default App;
