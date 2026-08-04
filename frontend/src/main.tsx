import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { StrictMode } from 'react'
import { AuthProvider } from './features/auth/AuthProvider.tsx'


import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
)
