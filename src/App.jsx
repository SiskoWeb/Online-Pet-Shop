import { useState } from 'react'

import './App.css'
import NavBar from './User/Components/NavBar/NavBar'
import Hero from './User/Components/Hero/Hero'
import Categories from './User/Components/Categories/Categories'
import ProductsHome from './User/Components/ProductsHome/ProductsHome/ProductsHome'
import Footer from './utilis/Footer/Footer'
import HomePage from './User/Pages/HomePage/HomePage'
import ProductDetails from './User/Pages/ProductDetails/ProductDetails'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from './User/Pages/CartPage/CartPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Product" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />


      </Routes>
    </BrowserRouter>

  )
}

export default App
