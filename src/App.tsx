import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Header from './components/Header/Header';
import Carrinho from './Pages/Carrinho/Carrinho';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/produtos" element={<Products/>} />
            <Route path="/carrinho" element={<Carrinho/>} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
