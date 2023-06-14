import "./style.css";
import Todos from "./component/Todobox";
import Button from "./component/Button";
import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState([
    {
      id: 0,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: 1,
      title: "리액트 공부하기2",
      body: "리액트 기초를 공부해봅시다.2",
      isDone: true,
    },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // 핸들러
  const addTitlehandler = (event) => {
    setTitle(event.target.value);
  };

  const addBodyhandler = (event) => {
    setBody(event.target.value);
  };

  const addListHander = (event) => {
    const addList = {
      id: todo.length + 1,
      title: title,
      body: body,
    };

    setTodo([...todo, addList]);
  };
  //클릭

  const deleteClick = (itemid) => {
    const addlist = todo.filter((todo) => {
      return todo.id !== itemid;
    });
    setTodo(addlist);
  };
  const moveClick = (itemid) => {
    const addList = todo.map((todo) => {
      if (todo.id === itemid) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return { ...todo };
      }
    });
    setTodo(addList);
  };

  // 몸통
  return (
    <div className="body">
      <div className="header">
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
            onChange={addTitlehandler}
          />
          내용
          <input
            type="text"
            className="input-text"
            value={body}
            onChange={addBodyhandler}
          />
          <Button className="add-button" addListHander={addListHander}>
            추가하기
          </Button>
        </div>
      </div>
      <div>
        <div className="list-text">Working..🔥</div>
        <div className="list">
          {/* todo: 리스트 */}
          {todo.map((td) => {
            //if문 isdone false인 애들만 retuen
            if (!td.isDone) {
              return (
                <Todos
                  key={td.id}
                  todo={td}
                  setTodo={setTodo}
                  deleteClick={deleteClick}
                  moveClick={moveClick}
                ></Todos>
              );
            }
          })}
        </div>
        <div className="list-text">Done..!🎉</div>
        <div className="list">
          {todo.map((td) => {
            if (td.isDone) {
              return (
                <Todos
                  key={td.id}
                  todo={td}
                  setTodo={setTodo}
                  deleteClick={deleteClick}
                  moveClick={moveClick}
                ></Todos>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
