import React from "react";
import todos from "./todos";
import shortid from "shortid";

const initialState = [
  {
    id: shortid.generate(),
    title: "리액트1",
    body: "리액트 공부하기1",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "리액트2",
    body: "리액트 공부하기2",
    isDone: true,
  },
  {
    id: shortid.generate(),
    title: "리액트3",
    body: "리액트 공부하기3",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "리액트4",
    body: "리액트 공부하기4",
    isDone: true,
  },
];

const reviwes = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_REVIWES":
      return [...state, action.payload];
    case "DELETE_REVIWES":
      return state.filter((todo) => todo.id !== action.payload);
  }
  return state;
};
export default reviwes;
