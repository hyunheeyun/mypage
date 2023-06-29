import React from 'react';
import shortid from 'shortid';

const initialState = [
  {
    id: shortid(),
    title: '리액트 공부하자!',
    context: '리액트 숙련 공부하기!',
    isDone: false,
  },
  {
    id: shortid(),
    title: '리액트 복습하기!',
    context: '리액트 입문 복습하기!',
    isDone: true,
  },
];

const todolist = (state = initialState, action) => {
  switch (action.type) {
    case 'Add_Todo':
      return [...state, action.payload];
    case 'Delete_Todo':
      return state.filter((todo) => todo.id !== action.payload);
    case 'Move_Todo':
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};

export default todolist;
