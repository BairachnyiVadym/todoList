/**
 * Created by vadim on 12.01.18.
 */
import {ADD_TODO} from "../actions/ActionCreators";

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        default:
            return state;
    }
}

export default todos;