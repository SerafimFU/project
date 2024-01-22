import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/main/Main.tsx'
import Autorisation from './components/entrance/Autorisation.tsx'
import Registration from './components/entrance/Registration.tsx'
import Change_password from './components/entrance/Cange_passwoed.tsx'
import Forgot_password from './components/entrance/Forgot_password.tsx'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/autorisation" element={<Autorisation />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/forgot_password" element={<Forgot_password />} />
        <Route path="/change_password" element={<Change_password />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
