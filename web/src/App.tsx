import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from "react"
import Main from './components/main/Main.tsx'
import Autorisation from './components/entrance/Autorisation.tsx'
import Registration from './components/entrance/Registration.tsx'
import Change_password from './components/entrance/Cange_password.tsx'
import Forgot_password from './components/entrance/Forgot_password.tsx'
import Profile from './components/profile/Profile.tsx'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const [displayError, setDisplayError] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate replace to="/profile" /> : <Main />} />
        <Route path="/autorisation" element={isLoggedIn ? <Navigate replace to="/profile" /> : <Autorisation handleLogin={handleLogin} setDisplayError={setDisplayError} displayError={displayError} />} />
        <Route path="/registration" element={isLoggedIn ? <Navigate replace to="/profile" /> :<Registration setDisplayError={setDisplayError} displayError={displayError} />} />
        <Route path="/forgot_password" element={isLoggedIn ? <Navigate replace to="/profile" /> : <Forgot_password />} />
        <Route path="/change_password" element={<Change_password setDisplayError={setDisplayError} displayError={displayError} />} />
        <Route path="/profile" element={isLoggedIn ? <Profile handleLogout={handleLogout} /> : <Navigate replace to="/autorisation" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
