import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import './App.css'
import { Orders } from './pages/Orders'
import { TrackingPage } from './pages/TrackingPage'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage/>} />
      <Route path="checkout" element={<CheckoutPage/>}/>
      <Route path="orders" element={<Orders/>}/>
      <Route path="tracking" element={<TrackingPage/>}/>
      
    </Routes>
  )
}

export default App
