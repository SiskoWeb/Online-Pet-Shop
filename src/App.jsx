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
import CategoriesAdmin from './Admin/Components/CategoriesAdmin/CategoriesAdmin'
import Order from './Admin/Components/OrderDetailes/Order'
import AddProduct from './Admin/Components/AddProduct/AddProduct'
import AllProducts from './Admin/Components/AllProducts/AllProducts'
import AllOrders from './Admin/Components/AllOrders/AllOrders'
import EditProduct from './Admin/Components/EditProduct/EditProduct'

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
          <Route path="allproducts" index element={<AllProducts />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="categories" index element={<CategoriesAdmin />} />
          <Route path="order/1" index element={<Order />} />
          <Route path="orders" index element={<AllOrders />} />
          <Route path="product/1" index element={<EditProduct/>} />

        </Route>
      </Routes>

    </BrowserRouter>

  )
}

export default App
