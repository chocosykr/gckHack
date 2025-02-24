import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PatientVer from './components/PatientVer'
import App from './App.jsx'
import Modal from './components/ui/modal'
// import Card from './components/ui/card'
import Home from './components/home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <PatientVer/> */}
    <App />
    {/* <Home/> */}
  </StrictMode>,
)
