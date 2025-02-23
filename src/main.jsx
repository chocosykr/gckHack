import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // Corrected import
import { ClerkProvider } from '@clerk/react-router'
import './index.css'
import App from './App.jsx'
import Dashboard from './Dashboard.jsx' // Add import for the Dashboard component

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Dashboard" element={<Dashboard />} /> {/* Dashboard route */}
        </Routes>
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>,
)
