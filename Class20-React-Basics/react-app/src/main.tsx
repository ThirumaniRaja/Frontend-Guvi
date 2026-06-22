import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'
import Marks from './components/Marks.tsx'
import Cart from './components/Cart.tsx'
import UseStateCom from './components/UseState.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Marks />
    <Cart />
    <UseStateCom />
  </StrictMode>,
)
