import React from "react";
import "./style.css";

function Todolist({ todos, setTodos, isDone }) {
  return (
    <div>
      <h3 className="list-text">{isDone ? "Done..!🎉" : "Working..🔥"} </h3>
      <div className="list">
        {/* todo: 리스트 */}
        {todos
          .filter((td) => {
            return td.isDone === isDone;
          })
          .map((todo) => {
            return (
              <div key={todo.id}>
                <p>{todo.title}</p>
                <p>{todo.body}</p>
                <button
                  onClick={() => {
                    const newTd = todos.filtrer((item) => {
                      return todo.id !== item.id;
                    });
                    setTodos(newTd);
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    const newTd = todos.map((item) => {
                      if (item.id === todo.id) {
                        return { ...item, isDone: !item.isDone };
                      }
                    });
                    setTodos(newTd);
                  }}
                >
                  {isDone ? "취소하기" : "완료!"}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Todolist;
