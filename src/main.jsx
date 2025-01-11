import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ItemsProvider } from './Contexts/itemsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ItemsProvider>
    <App />
    </ItemsProvider>
  </StrictMode>,
)
