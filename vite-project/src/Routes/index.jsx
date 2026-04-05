import { BrowserRouter,Routes, Route, Link } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Navbar from "../components/Navbar"

function App() {
  // const title="ProductBank";
  return (
    <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      
      </>
    
  )
}

export default App
