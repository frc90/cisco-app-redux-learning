import {createSelector} from "reselect";


export const todoListSelector = (state) => state.todoList;

export const listSelector = createSelector(
    [todoListSelector],
    todoList => todoList.list
);
