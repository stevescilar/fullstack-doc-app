import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import browser router 
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // I added the support of router dom in this project
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
