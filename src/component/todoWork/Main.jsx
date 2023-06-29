import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';

const Main = () => {
  const [title, setTitle] = useState('');
  const [context, setContext] = useState('');

  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(event) => {
        if (!title || !context) {
          alert('입력하세요');
          return false;
        }
        event.preventDefault();

        dispatch({
          type: 'Add_Todo',
          payload: {
            id: shortid(),
            title: title,
            context: context,
            isDone: false,
          },
        });
        setTitle('');
        setContext('');
      }}
    >
      {/* id: shortid(), tittle: '리액트 공부하자!', context: '리액트 숙련
      공부하기!', isDone: false, */}
      <div>
        <div>제목</div>
        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <div>내용</div>
        <input
          type="text"
          value={context}
          onChange={(event) => {
            setContext(event.target.value);
          }}
        />
      </div>
      <button>추가하기</button>
    </form>
  );
};

export default Main;
