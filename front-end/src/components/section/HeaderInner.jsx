import React from 'react'
import Logo from '../common/Logo'
import Menu from '../common/Menu'
import Cart from '../common/Cart'
import StyleSheet from './HeaderInner.module.css'


const HeaderInner = () => {
  return (
    <div className={StyleSheet.wrapper}>
        <Logo />
        <Menu />
        <Cart />
    </div>
  )
}

export default HeaderInner