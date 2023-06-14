const Todos = ({ todo, deleteClick, moveClick }) => {
  if (todo.title.trim() === "" || todo.body.trim() === "") {
    return;
  } else {
    return (
      <div className="list-box">
        <div key={todo.id} className="todo-title">
          {todo.title}
        </div>
        <div className="todo-body">{todo.body}</div>
        <div className="list-btn">
          <button className="delete-btn" onClick={() => deleteClick(todo.id)}>
            삭제하기
          </button>
          <button className="done-btn" onClick={() => moveClick(todo.id)}>
            {todo.isDone ? "취소" : "완료"}
          </button>
        </div>
      </div>
    );
  }
};

export default Todos;
