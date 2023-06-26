import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);
  const todo = todos.filter((todo) => todo.id === id)[0];
  const reviews = useSelector((state) => state.reviews);
  const review = reviews.filter((todo) => todo.id === id)[0];

  const dispatch = useDispatch();

  return (
    <div>
      {todo.id}
      <br />
      {todo.title}
      <br />
      {todo.body}
      <br />
      {todo.isDone.toString()}
      <br />
      <button onClick={() => navigate("/")}>이전 화면으로</button>
      <br />
      {review.value}
      <textarea />
      <button onClick={() => dispatch({type:"ADD_REVIEWS",
    payload: })}>댓글 저장</button>
      <button onClick={() => dispatch("DELETE_REVIWES")}>삭제</button>
    </div>
  );
};

export default Detail;
