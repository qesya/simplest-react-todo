import React, { Component } from 'react';
import ListGenerator from '../src/components/ListGenerator/listGenerator';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Simpliest React ToDo List</h1>
        <ListGenerator />
      </div>
    );
  }
}

export default App;
