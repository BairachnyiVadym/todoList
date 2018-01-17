/**
 * Created by vadim on 12.01.18.
 */
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const VisibilityFilters = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETED: "SHOW_COMPLETED",
    SHOW_ACTIVE: "SHOW_ACTIVE"
};

let nextTodoId = 0;

export const AddTodo = (text) => {
    return { type: ADD_TODO, text, id: nextTodoId++ };
};

export const ToggleTodo = (id) => {
    return { type: TOGGLE_TODO, id };
};

export const SetVisibilityFilter = (filter) => {
    return { type: SET_VISIBILITY_FILTER, filter};
};
