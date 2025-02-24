import './App.css'
import Home from './components/home'
import { Button } from './components/ui/button'
import { Checkbox } from './components/ui/checkbox'
import Login from './components/ui/Login'
import Modal from './components/ui/modal'
import Navbar from './components/ui/navbar'
import RoleSelectionPage from './Pages/RoleSelectionPage';
import Dr_Verification from './Pages/Dr_Verification';
import Dr_Dashboard from './Pages/Dr_Dashboard';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import PatientVer from './components/PatientVer'

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/modal" element={<Modal isOpen={true} title={'jojo'} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/RoleSelectionPage" element={<RoleSelectionPage/>}/>
        <Route path="/Dr_Verification" element={<Dr_Verification/>}/>
        <Route path="/Dr_Dashboard" element={<Dr_Dashboard/>}/>
        <Route path="/PatientVer" element={<PatientVer/>}/>

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
