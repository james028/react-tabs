import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './components/tabs'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs>
          <div label="Gator">
            See ya later, <em>Alligator</em>!
          </div>
          <div label="Croc">
            After 'while, <em>Crocodile</em>!
          </div>
          <div label="Sarcosuchus">
            Nothing to see here, this tab is <em>extinct</em>!
          </div>
        </Tabs>
      </div>
    );
  }
}

export default App;
