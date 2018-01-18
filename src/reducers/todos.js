/**
 * Created by vadim on 12.01.18.
 */
import {ADD_TODO, TOGGLE_TODO} from "../actions/ActionCreators";

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false,
                    id: action.id
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                else {
                    return todo;
                }
            });

        default:
            return state;
    }
}

export default todos;