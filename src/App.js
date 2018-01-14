import React, { Component } from 'react';
import './App.css';

import ReactHeader from "./ReactHeader";
import TodoInput from "./components/TodoInput";


class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactHeader/>
        <TodoInput/>
      </div>
    );
  }
}

export default App;
