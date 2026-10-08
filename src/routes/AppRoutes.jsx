import {
    HashRouter,
    BrowserRouter,
    Routes,
    Route 
} from "react-router-dom"

// Importando as páginas atualizadas para o ECOERA
import HomeEcoera from '../pages/HomeEcoera/HomeEcoera'
import ListarTrocas from '../pages/ListarTrocas/ListarTrocas'
import NovoItem from '../pages/NovoItem/NovoItem'
import EditarItem from '../pages/EditarItem/EditarItem'

const AppRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                {/* Rota inicial / Home */}
                <Route 
                    path="/"
                    element={<HomeEcoera/>}
                />

                <Route 
                    path="/home"
                    element={<HomeEcoera/>}
                />

                {/* Rota para listar os itens de troca */}
                <Route 
                    path="/trocas"
                    element={<ListarTrocas/>}
                />

                {/* Rota para cadastrar um novo item sustentável */}
                <Route 
                    path="/novo-item"
                    element={<NovoItem/>}
                />

                {/* Rota para editar um item existente (passando o ID pela URL) */}
                <Route 
                    path="/editar-item/:id"
                    element={<EditarItem/>}
                />
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes