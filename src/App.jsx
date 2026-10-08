import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeEcoera from './pages/HomeEcoera/HomeEcoera';
import ListarTrocas from './pages/ListarTrocas/ListarTrocas';
import NovoItem from './pages/NovoItem/NovoItem';
import ListarEcopontos from './pages/ListarEcopontos/ListarEcopontos';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeEcoera />} />
        <Route path="/trocas" element={<ListarTrocas />} />
        <Route path="/novo-item" element={<NovoItem />} />
        <Route path="/ListarEcopontos" element={<ListarEcopontos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;