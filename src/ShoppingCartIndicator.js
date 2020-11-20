import './ShoppingCartIndicator.css'
import React, { useContext } from 'react'
import shoppingCartIcon from './assets/shopping-cart.svg'
import { CartContext } from './CartContext.js'

export default function ShoppingCartIndicator (props) {
  const context = useContext(CartContext)
  const { toggleCart, numberOfItemsInCart } = context

  return (
    <>
      <button type='button' onClick={toggleCart} className='shopping-cart-indicator'>
        <p>{
          numberOfItemsInCart === 0
            ? 'No items in cart'
            : numberOfItemsInCart === 1
              ? '1 item in cart'
              : `${numberOfItemsInCart} items in cart`
        }
        </p>
        <img src={shoppingCartIcon} className='shopping-cart-icon' alt='shopping-cart-icon' />
      </button>
    </>
  )
}
