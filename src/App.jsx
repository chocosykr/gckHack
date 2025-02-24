import './App.css'
import Home from './components/home'
import { Button } from './components/ui/button'
import { Checkbox } from './components/ui/checkbox'
import Login from './components/ui/Login'
import Modal from './components/ui/modal'
import Navbar from './components/ui/navbar'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/modal" element={<Modal isOpen={true} title={'jojo'} />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* ✅ Proper Link Usage */}
      {/* <Link to="/login">
        <button>Go to Login</button>
      </Link> */}

      {/* ✅ Use Navigate Function */}
      {/* <NavigateButton /> */}
    </BrowserRouter>
  )
}

export default App;
