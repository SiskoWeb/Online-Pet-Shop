import { useState } from 'react'

import './App.css'
import NavBar from './User/Components/NavBar/NavBar'
import Hero from './User/Components/Hero/Hero'
import Categories from './User/Components/Categories/Categories'
import ProductsHome from './User/Components/ProductsHome/ProductsHome/ProductsHome'
import Footer from './utilis/Footer/Footer'
import HomePage from './User/Pages/HomePage/HomePage'
import ProductDetails from './User/Pages/ProductDetails/ProductDetails'
function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='App'>
      <NavBar />
      <ProductDetails />
      <Footer />
    </div>


  )
}

export default App
