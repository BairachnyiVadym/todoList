/**
 * Created by vadim on 12.01.18.
 */
export const ADD_TODO = "ADD_TODO";

export const AddTodo = (text) => {
    return { type: "ADD_TODO", text };
};
