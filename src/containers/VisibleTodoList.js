/**
 * Created by vadim on 16.01.18.
 */
import {ToggleTodo} from "../actions/ActionCreators";
import TodoList from "../components/TodoList";
import {connect} from "react-redux";

function getVisibleTodos(todos, filter) {
    switch (filter) {
        case "SHOW_ACTIVE":
            return todos.filter((todo) => !todo.completed);
        case "SHOW_COMPLETED":
            return todos.filter((todo) => todo.completed);
        case "SHOW_ALL":
            default:
                return todos;
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};

const mapDispatchTiProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(ToggleTodo(id));
        }
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchTiProps
)(TodoList);

export default VisibleTodoList;