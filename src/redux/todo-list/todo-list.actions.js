import {TodoListTypes} from "./todo-list.types";

export const addItemAction = (item) => ({
    type: TodoListTypes.ADD_ITEM,
    payload: item
});