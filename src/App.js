import React, { Component } from 'react';
import './App.css';

import ReactHeader from "./ReactHeader";
import TodoInput from "./components/TodoInput";
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactHeader/>
        <TodoInput/>
        <VisibleTodoList/>
        <Footer/>
      </div>
    );
  }
}

export default App;
