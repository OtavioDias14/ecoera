import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MenuEcoera from "../pages/MenuEcoera/MenuEcoera";
import HomeEcoera from "../pages/HomeEcoera/HomeEcoera";
import ExplorePage from "../pages/ExplorePage/ExplorePage"; // <- Importado aqui
import TrocasPage from "../pages/TrocasPage/TrocasPage";
import NovoItem from "../pages/NovoItem/NovoItem";
import ListarEcopontos from "../pages/ListarEcopontos/ListarEcopontos";
import Login from "../pages/Login/Login";
import HistoricoTrocas from "../pages/HistoricoTrocas/HistoricoTrocas";

function AppRoutes() {
  return (
    <BrowserRouter>
      <MenuEcoera />

      <Routes>
        <Route path="/" element={<HomeEcoera />} />
        <Route path="/explore" element={<ExplorePage />} /> {/* Rota do Explore */}
        <Route path="/trocas" element={<TrocasPage />} />
        <Route path="/novo-item" element={<NovoItem />} />
        <Route path="/listar-ecopontos" element={<ListarEcopontos />} />
        <Route path="/historico-trocas" element={<HistoricoTrocas />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;