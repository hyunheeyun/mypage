import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ListBox = () => {
  const todos = useSelector((state) => {
    return state.todolist;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h2>TODO LIST</h2>
        {todos
          .filter((todolist) => todolist.isDone === false)
          .map((todolist) => {
            return (
              <div
                key={todolist.id}
                style={{
                  border: '1px solid black',
                  padding: '15px',
                  margin: '15px',
                }}
              >
                <Link to={`/detail/${todolist.id}`}>상세페이지</Link>
                <br />
                {todolist.id}
                <br />
                {todolist.title}
                <br />
                {todolist.context}
                <br />
                {todolist.isDone.toString()}
                <br />
                <button
                  onClick={() => {
                    dispatch({
                      type: 'Move_Todo',
                      payload: todolist.id,
                    });
                  }}
                >
                  완료
                </button>
                <button
                  onClick={() => {
                    dispatch({
                      type: 'Delete_Todo',
                      payload: todolist.id,
                    });
                  }}
                >
                  삭제
                </button>
              </div>
            );
          })}
      </div>
      <div>
        <h2>Done LIST</h2>
        {todos
          .filter((todolist) => todolist.isDone === true)
          .map((todolist) => {
            return (
              <div
                key={todolist.id}
                style={{
                  border: '1px solid black',
                  padding: '15px',
                  margin: '15px',
                }}
              >
                <Link to={`/detail/${todolist.id}`}>상세페이지</Link>
                <br />
                {todolist.id}
                <br />
                {todolist.title}
                <br />
                {todolist.context}
                <br />
                {todolist.isDone.toString()}
                <br />
                <button
                  onClick={() => {
                    dispatch({
                      type: 'Move_Todo',
                      payload: todolist.id,
                    });
                  }}
                >
                  완료
                </button>
                <button
                  onClick={() => {
                    dispatch({
                      type: 'Delete_Todo',
                      payload: todolist.id,
                    });
                  }}
                >
                  삭제
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListBox;
