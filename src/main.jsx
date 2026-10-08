import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './routes/AppRoutes'

// Importar o bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// Tema EcoEra POR ÚLTIMO (pra vencer o bootstrap)
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes/>
  </StrictMode>,
)