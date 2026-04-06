import React from 'react'
import './Header.module.css'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">MELLIFERA</div>
      <nav>
        <a href="#home">Home</a>
        <a href="#products">Products</a>
      </nav>
      <div className="cart">Cart (0)</div>
    </header>
  )
}

export default Header