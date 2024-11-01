import { useState } from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Placeorder from './pages/Placeorder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
<Route path='/' element={<Home />} />
<Route path='collection' element={<Collection />} />
<Route path='/about' element={<About />} />
<Route path='/contact' element={<Contact />} />
<Route path='/product/:productId' element={<Product />} />
<Route path='/cart' element={<Cart />} />
<Route path='/login' element={<Login />} />
<Route path='/placeholder' element={<Placeorder />} />
<Route path='/orders' element={<Orders />} />



    </Routes>
    
    </>
  )
}

export default App
