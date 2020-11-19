import './App.css'
import React from 'react'
import { CartProvider } from './CartContext.js'
import Navbar from './Navbar'
import StoreFront from './StoreFront.js'
import ShoppingCart from './ShoppingCart'

// Combine components
function App () {
  return (
    <>
      <Navbar />
      <StoreFront />
      <ShoppingCart />
    </>
  )
}

// Wrap app to provide Context
function AppWrapper () {
  return (
    <CartProvider>
      <App />
    </CartProvider>
  )
}

export default AppWrapper
