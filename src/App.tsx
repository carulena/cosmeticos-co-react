import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from './Pages/Home/Home';
import Produtos from './Pages/Produtos/Produtos';
import Header from './components/Header/Header';
import Carrinho from './Pages/Carrinho/Carrinho';
import Finalizado from './Pages/Finalizado/Finalizado';
import DetalhesProduto from './Pages/DetalhesProduto/DetalhesProduto';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/produtos" element={<Produtos/>} />
            <Route path="/carrinho" element={<Carrinho/>} />
            <Route path="/finalizado" element={<Finalizado/>} />
            <Route path="/detalhes/:id" element={<DetalhesProduto/>} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
