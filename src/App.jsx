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
import LoginPage from './Admin/Pages/LoginPage/LoginPage'
import DashboardPage from './Admin/Pages/DashboardPage/DashboardPage'
import Dashboard from './Admin/Components/Dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Product" element={<ProductDetails />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="admin" element={<DashboardPage />}>
          <Route index element={<Dashboard />} />
          <Route path="allproducts" index element={<h2>all Products</h2>} />
          <Route path="addproduct" element={<h2>Add Product</h2>} />
          <Route path="categories" index element={<h2>Categories</h2>} />

        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App
