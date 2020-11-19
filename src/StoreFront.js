import './StoreFront.css'
import React, { useContext } from 'react'
import Product from './Product.js'
import { CartContext } from './CartContext.js'

export default function StoreFront () {
  // Get products from context
  const context = useContext(CartContext)
  const { products } = context

  return (
    <>
      <div className='store-front'>
        {products && products.map(product => <Product key={product.id} details={product} />)}
      </div>
    </>
  )
}
