/**
 * Created by vadim on 17.01.18.
 */
import {combineReducers} from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

export default todoApp;