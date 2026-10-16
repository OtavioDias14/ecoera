import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuEcoera from './pages/MenuEcoera/MenuEcoera';
import HomeEcoera from './pages/HomeEcoera/HomeEcoera';
import ExplorePage from './pages/ExplorePage/ExplorePage';
import NovoItem from './pages/NovoItem/NovoItem';
import ListarEcopontos from './pages/ListarEcopontos/ListarEcopontos';
import HistoricoTrocas from './pages/HistoricoTrocas/HistoricoTrocas';
import Login from './pages/Login/Login';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <MenuEcoera />

      <Routes>
        <Route path="/" element={<HomeEcoera />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/novo-item" element={<NovoItem />} />
        <Route path="/listar-ecopontos" element={<ListarEcopontos />} />
        <Route path="/historico-trocas" element={<HistoricoTrocas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;