import React, { Component } from 'react';
import './App.css';

import ReactHeader from "./ReactHeader";
import TodoInput from "./components/TodoInput";
import VisibleTodoList from "./containers/VisibleTodoList";


class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactHeader/>
        <TodoInput/>
        <VisibleTodoList/>
      </div>
    );
  }
}

export default App;
