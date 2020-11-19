import './Navbar.css'
import React from 'react'
import ShoppingCartIndicator from './ShoppingCartIndicator'

export default function Navbar () {
  return (
    <nav className='navbar'>
      <header className='navbar__header'>
        <div className='navbar__wish-logo'>Wish</div>
        <div className='hidden-xs'>The most definitive shape store in the world</div>
      </header>
      <ShoppingCartIndicator />
    </nav>
  )
}
