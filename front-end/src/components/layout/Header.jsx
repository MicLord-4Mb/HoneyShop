import React from 'react'
import './Header.css'
import HeaderInner from '../section/HeaderInner'


const Header = () => {
  return (
    <header className="header">
      <HeaderInner />
      <h1 className="header-title">HONEY BEE</h1>
      <h2 className="header-subtitle">FRESH & SWEET AS HONEY.</h2>
      <p className="header-description">
        Lorem ipsum dolor sit amet, sint nostrum mea ut, vel semper vidisse eu usu temporibus disputationi voluptatibus in ei est possit salutandi abhorrea acusata, ad cum eruditi expetendis. Ad cum eruditi expetendis.
      </p>
      <a href="#products" className="header-button">VIEW MORE</a>
    </header>
  )
}

export default Header