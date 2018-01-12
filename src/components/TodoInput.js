import React from 'react';
import {AddTodo} from "../actions/ActionCreators";
import {connect} from "react-redux";

let TodoInput = ({dispatch}) => {
    let input;

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            dispatch(AddTodo(input.value));
            input.value = '';
        }}>
            <input type="text" ref={node => input = node} placeholder="Type here"/>
            <button type="submit"> Add Todo</button>
        </form>
    );
};

TodoInput = connect()(TodoInput);

export default TodoInput;