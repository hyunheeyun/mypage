import { createStore } from 'redux';
import { combineReducers } from 'redux';
import todolist from '../modules/todolist';

const rootReducers = combineReducers({
  todolist: todolist,
});
const store = createStore(rootReducers);

export default store;
