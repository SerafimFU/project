import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/main/Main.tsx'
import Enterform from './components/entrance/Enterform.tsx'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/autorisation" element={<Enterform />} />
        <Route path="/registration" element={<Enterform />} />
        <Route path="/forgot_password" element={<Enterform />} />
        <Route path="/change_password" element={<Enterform />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
