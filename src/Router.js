import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login.js'
import Main from './pages/Main/Main.js'
import Detail from './pages/Detail/Detail';
import './styles/reset.scss';
import './styles/common.scss';

function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/main" element={<Main />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  </BrowserRouter>
  );
}

export default Router;
