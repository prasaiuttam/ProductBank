import { Routes, Route, Link } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import Navbar from "../components/Navbar"

function App() {
  return (
    <div className="p-6">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
