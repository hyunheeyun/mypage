import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../page/Home';
import Detail from '../page/Detail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
