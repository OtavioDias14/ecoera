import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuEcoera from './components/MenuEcoera';
import HomeEcoera from './pages/HomeEcoera/HomeEcoera';
import TrocasPage from './pages/TrocasPage/TrocasPage';
import NovoItem from './pages/NovoItem/NovoItem';
import ListarEcopontos from './pages/ListarEcopontos/ListarEcopontos';
import HistoricoTrocas from './pages/HistoricoTrocas/HistoricoTrocas';
import Login from './pages/Login/Login';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <MenuEcoera />

     import Login from './pages/Login/Login'; // 1. Importe a página

// ... dentro do seu componente de rotas:
<Routes>
  <Route path="/" element={<HomeEcoera />} />
  <Route path="/login" element={<Login />} /> {/* 2. Adicione a rota */}
  <Route path="/trocas" element={<TrocasPage />} />
  <Route path="/novo-item" element={<NovoItem />} />
  <Route path="/ListarEcopontos" element={<ListarEcopontos />} />
  <Route path="/HistoricoTrocas" element={<HistoricoTrocas />} />
</Routes>
    </BrowserRouter>
  );
  
}

export default App;