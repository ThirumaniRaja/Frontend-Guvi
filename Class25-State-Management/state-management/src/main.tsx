import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { EmployeeProvider } from './context/EmployeeContext.jsx'

createRoot(document.getElementById('root')).render(
  // now every component can access the context
  <EmployeeProvider>
    <App />
  </EmployeeProvider>,
)
