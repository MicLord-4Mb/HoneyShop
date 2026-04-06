import React from 'react'
import Logo from '../common/Logo'
import Menu from '../common/Menu'
import Cart from '../common/Cart'
import './HeaderInner.css'


const HeaderInner = () => {
  return (
    <div className='headerInner'>
        <Logo />
        <Menu />
        <Cart />
    </div>
  )
}

export default HeaderInner