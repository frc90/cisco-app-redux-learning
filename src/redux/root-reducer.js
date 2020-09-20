import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import todoListReducer from "./todo-list/todo-list.reducer";

export default combineReducers({
  user: userReducer,
  todoList: todoListReducer
});
