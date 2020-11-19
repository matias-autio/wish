import { FiX } from 'react-icons/fi'
import './ShoppingCart.css'
import React, { useContext } from 'react'
import Product from './Product.js'
import { CartContext } from './CartContext.js'

export default function ShoppingCart () {
  const context = useContext(CartContext)
  const { products, toggleCart, total } = context

  // Settings to render Product differently for ShoppingCart
  // Could be done as separate components, but passing one parameter
  // seemed handy

  const settings = {
    list_view: true
  }

  return (
    <>
      <div onClick={toggleCart} className='shopping-cart__overlay' />
      <div className='shopping-cart'>
        {/* <h2>Shopping cart</h2> */}
        <h2>Your cart total is {total} €.</h2>
        <button onClick={toggleCart} className='shopping-cart__close'><FiX /></button>
        {/* Passing settings for Product */}
        {products && products.map(product => <Product key={product.id} settings={settings} details={product} />)}
        <button disabled={!total} className='shopping-cart__checkout'>Checkout</button>
      </div>
    </>
  )
}
