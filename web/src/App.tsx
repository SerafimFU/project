import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Entrance from './components/entrance/Entrance.tsx'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Entrance />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
