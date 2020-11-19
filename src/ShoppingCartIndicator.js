import './ShoppingCartIndicator.css'
import React, { useContext } from 'react'
import shoppingCartIcon from './assets/shopping-cart.svg'
import { CartContext } from './CartContext.js'

export default function ShoppingCartIndicator (props) {
  const context = useContext(CartContext)
  const { toggleCart, numberOfItemsInCart } = context

  // Conditional text based on number of items in cart
  const indicatorText = _ => {
    if (numberOfItemsInCart === 0) {
      return 'No items in cart'
    } else if (numberOfItemsInCart === 1) {
      return '1 item in cart'
    } else {
      return `${numberOfItemsInCart} items in cart`
    }
  }

  function handleOpenCartClick () {
    toggleCart()
  }

  return (
    <>
      <button onClick={handleOpenCartClick} className='shopping-cart-indicator'>
        <p>{indicatorText()}</p>
        <img src={shoppingCartIcon} className='shopping-cart-icon' alt='shopping-cart-icon' />
      </button>
    </>
  )
}
