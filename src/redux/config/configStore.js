import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";
import reviwes from "../modules/reviwes";

// store를 만들어 내기
// 중앙데이터관리소
const rootReducer = combineReducers({
  todos: todos,
  reviwes,
});

const store = createStore(rootReducer);

export default store;
