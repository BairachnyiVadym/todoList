/**
 * Created by vadim on 16.01.18.
 */
import React from 'react'
import Todo from "./Todo";
import PropTypes from 'prop-types';

const TodoList = ({todos, onTodoClick}) => {
    return (
        <ul>
            {todos.map((todo) => {
                return <Todo key={todo.id} {...todo} onClick={()=> onTodoClick(todo.id)}/>
            })}
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default TodoList;

