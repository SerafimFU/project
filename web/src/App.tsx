import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Entrance from './components/entrance/Entrance.tsx'
import Autorisation from './components/autorisation/Autorisation.tsx'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Entrance />} />
        <Route path="/autorisation" element={<Autorisation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
