import { BrowserRouter,Routes, Route, Link } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import ProductList from '../pages/ProductList'
import AddNewProduct from "../pages/AddNewProduct"; 
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Product from '../pages/Product'
import Cart from "../pages/Cart"          
function App() {
  // const title="ProductBank";
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/add-product" element={<AddNewProduct />} />
          
        </Routes>
        <Footer/>
      
      </>
    
  )
}

export default App
