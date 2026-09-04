import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Koleksi from './pages/Koleksi'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/koleksi" element={<Koleksi />} />
    </Routes>
  )
}

export default App