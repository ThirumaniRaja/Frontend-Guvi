import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Search from './Search.tsx'
import User from './Api/user.tsx'
import FakeApi from './Api/FakeApi.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Search /> */}
    {/* <User /> */}
    <FakeApi />
  </StrictMode>,
)
