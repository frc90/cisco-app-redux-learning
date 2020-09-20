import {TodoListTypes} from "./todo-list.types";

const INITIAL_STATE = {
  list: [{name: 'Cisco'}, {name: 'Alexis'}]
};

const todoListReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TodoListTypes.ADD_ITEM:
            return {
                ...state,
                list: [...state.list, action.payload]
            };
        default:
            return state;
    }
};

export default todoListReducer;