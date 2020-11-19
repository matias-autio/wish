import './Product.css'
// Import icons
import { FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi'
import React, { useContext } from 'react'
import { CartContext } from './CartContext.js'

export default function Product (props) {
  // Use Context to access products
  const context = useContext(CartContext)
  const { updateQuantity } = context
  const { details, settings } = props
  // Init quantity
  if (!details.quantity) {
    details.quantity = 0
  }

  // Add product
  function handleAddClick () {
    updateQuantity(details.id, details.quantity + 1)
  }

  // Remove product
  function handleRemoveClick () {
    if (details.quantity > 0) {
      updateQuantity(details.id, details.quantity - 1)
    }
  }

  // Return list view for shopping cart
  if (settings && settings.list_view) {
    if (details.quantity === 0) {
      return ''
    }

    return (
      <>
        <div className='product list-view'>
          {/* Use the public url path for product images for dynamic paths by product ID */}
          <img className='product__image' src={process.env.PUBLIC_URL + `/img/product_${details.id}.png`} alt={details.name} />
          <div className='product__container'>
            <div className='product__info'>
              <div className='product__name'>
                <div>{details.name}</div>
                <div className='product__price'>{details.price} € <span className='product__each'>/each</span></div>
              </div>
            </div>
            <div className='product__buttons'>
              <button onClick={handleRemoveClick} className='product__remove'>
                {details.quantity === 1 ? <FiTrash2 /> : <FiMinus />}
              </button>
              <div className='product__quantity'>{details.quantity}</div>
              <button onClick={handleAddClick} className='product__add'><FiPlus /></button>

            </div>
            <div className='product__subtotal'>
              <span className='product__subtotal__text'>Subtotal</span>
              <span>{details.price * details.quantity} €</span>
            </div>
          </div>
        </div>
      </>
    )
  }

  // Return main product for StoreFront
  return (
    <>
      <div className='product'>
        {/* Use the public url path for product images for dynamic paths by product ID */}
        <img className='product__image' src={process.env.PUBLIC_URL + `/img/product_${details.id}.png`} alt={details.name} />
        <div className='product__container'>
          <div className='product__info'>
            <div className='product__name'>{details.name}</div>
            <div className='product__price'>{details.price} €</div>
          </div>
          <div className='product__details'>
            <div className='product__description'>{details.description}</div>
            {/* <div className='product__quantity'>Quantity: {details.quantity}</div> */}
            <button onClick={handleAddClick} className='product__add'>Add to cart</button>
            {/* <button onClick={handleRemoveClick} className='product__remove'>Remove item</button> */}
          </div>
        </div>
      </div>
    </>
  )
}
