import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ContextStore from './components/Context/ContextStore'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Cart from './components/Cart'
import ConfireOrder from './components/ConfirmOrder/ConfireOrder'
import Bill from './components/Bill/Bill.jsx'

function App() {
  
  return (
    <div>
     <ContextStore>
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/confirmorder" element={<ConfireOrder />} />
      <Route path="/bill" element={<Bill />} />
    </Routes>
  </BrowserRouter>
</ContextStore>

      
    </div>
  )
}

export default App