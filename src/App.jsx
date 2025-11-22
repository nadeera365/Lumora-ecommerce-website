import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import './App.css'
import { Orders } from './pages/Orders'
import { TrackingPage } from './pages/TrackingPage'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [cart, setCart]= useState([]);

  const loadCart = async ()=>{
    const response = await axios.get('/api/cart-items?expand=product');
    setCart(response.data)
  }

  useEffect(()=>{

    loadCart();
  },[])
  

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} setCart={setCart} loadCart={loadCart}/>} />
      <Route path="checkout" element={<CheckoutPage cart={cart}/>}/>
      <Route path="orders" element={<Orders cart={cart}/>}/>
      <Route path="tracking" element={<TrackingPage/>}/>
      
    </Routes>
  )
}

export default App
