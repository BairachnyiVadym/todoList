/**
 * Created by vadim on 16.01.18.
 */
import {ToggleTodo} from "../actions/ActionCreators";
import TodoList from "../components/TodoList";
import {connect} from "react-redux";

function getVisibleTodos(todos, filter) {
    switch (filter) {
        case "SHOW ACTIVE":
            return todos.filter((todo) => !todo.completed);
        case "SHOW COMPLETED":
            return todos.filter((todo) => todo.completed);
        case "SHOW ALL":
            default:
                return state.todos;
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};

const mapDispatchTiProps = (dispatch) => {
    return {
        onClick: (id) => {
            dispatch(ToggleTodo(id));
        }
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchTiProps
)(TodoList);

export default VisibleTodoList;