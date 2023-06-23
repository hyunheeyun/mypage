import "./component/style.css";
import { useState } from "react";
import uuid from "react-uuid";
import Todolist from "./component/Todolist";

const App = () => {
  const initisalState = [
    {
      id: uuid(),
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: uuid(),
      title: "리액트 공부하기2",
      body: "리액트 기초를 공부해봅시다.2",
      isDone: true,
    },
  ];

  const [todos, setTodos] = useState(initisalState);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // 핸들러
  // const addTitlehandler = (event) => {
  //   setTitle(event.target.value);
  // };

  // const addBodyhandler = (event) => {
  //   setBody(event.target.value);
  // };

  // const addListHander = (event) => {
  //   const addList = {
  //     id: uuid(),
  //     title: title,
  //     body: body,
  //   };

  //   setTodo([...todos, addList]);
  // };
  // //클릭

  // const deleteClick = (itemid) => {
  //   const addlist = todos.filter((todo) => {
  //     return todo.id !== itemid;
  //   });
  //   setTodo(addlist);
  // };
  // const moveClick = (itemid) => {
  //   const addList = todos.map((todo) => {
  //     if (todo.id === itemid) {
  //       return { ...todo, isDone: !todo.isDone };
  //     } else {
  //       return { ...todo };
  //     }
  //   });
  //   setTodo(addList);
  // };

  // 몸통
  return (
    <div className="body">
      <div
        className="header"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div>My todo list</div>
        <div>React</div>
      </div>
      <div>
        <div className="input">
          제목
          <input
            type="text"
            className="input-text"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          내용
          <input
            type="text"
            className="input-text"
            value={body}
            onChange={(event) => {
              setBody(event.target.value);
            }}
          />
          <button className="add-button" type="submit">
            추가하기
          </button>
          <div>
            <Todolist todos={todos} setTodos={setTodos} isDone={false} />
            <Todolist todos={todos} setTodos={setTodos} isDone={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
