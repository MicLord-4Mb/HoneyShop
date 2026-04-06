import React from 'react'
import Logo from '../common/Logo'

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