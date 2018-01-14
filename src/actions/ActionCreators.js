/**
 * Created by vadim on 12.01.18.
 */
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

let nextTodoId = 0;

export const AddTodo = (text) => {
    return { type: "ADD_TODO", text, id: nextTodoId++ };
};

export const ToggleTodo = (id) => {
    return { type: "TOGGLE_TODO", id };
};
