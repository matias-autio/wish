// Context for sharing shopping cart data within components
import React, { createContext, useEffect, useState } from 'react'
// Import products
import ProductsList from './products.json'

const CartContext = createContext()

function CartProvider (props) {
  // Use function definition to get the products (from json) just once
  const [products, setProducts] = useState(() => ProductsList)
  const [cart, setCart] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [total, setTotal] = useState(0)
  const [numberOfItemsInCart, setnumberOfItemsInCart] = useState(0)

  // Check if cart is open and prevent scroll
  function toggleCart () {
    setIsOpen(!isOpen)
    document.body.classList.toggle('shopping-cart-is-open')
  }

  function updateQuantity (id, quantity) {
    // Create a copy of the current products array
    const newProducts = [...products]
    // Find the index of the item by item id
    const index = newProducts.findIndex(obj => obj.id === id)
    // Add new property quantity with value quantity
    newProducts[index].quantity = quantity
    // Update products state variable
    setProducts(newProducts)
  }

  const values = {
    // Values to pass to children
    products,
    cart,
    updateQuantity,
    toggleCart,
    total,
    numberOfItemsInCart
  }

  // Update cart whenever products is changed
  useEffect(() => {
    // console.log('products changed!')
    const newProducts = [...products]
    const filtered = newProducts.filter(item => item.quantity && item.quantity > 0)
    setCart(filtered)
  }, [products])

  // Calculate total sum and number of items whenever cart is updated
  useEffect(() => {
    // Calculate the total number of items in cart
    function calculateItems () {
      return cart.reduce((prev, cur) => prev + cur.quantity, 0)
    }

    // Calculate the sum of items in cart
    function calculateTotal () {
      return cart.reduce((prev, cur) => prev + cur.price * cur.quantity, 0)
    }

    setTotal(calculateTotal)
    setnumberOfItemsInCart(calculateItems)
  }, [cart])

  return (
    <CartContext.Provider value={values}>
      {props.children}
    </CartContext.Provider>
  )
};

export { CartContext, CartProvider }
