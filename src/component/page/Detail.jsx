import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const navi = useNavigate();
  const todolist = useSelector((state) => state.todolist);
  const todos = todolist.filter((todos) => todos.id === id)[0];

  return (
    <div>
      {todos.id} <br />
      {todos.title} <br />
      {todos.context} <br />
      {todos.isDone.toString()} <br />
      <button onClick={() => navi('/')}>이전 화면</button>
    </div>
  );
};

export default Detail;
