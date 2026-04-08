import React from 'react'
import StyleSheet from './Cart.module.css'
import Button from '../ui/Links/Button';
import Icon from '../ui/Icon';

const Cart = () => {
  return (
    <div className={StyleSheet.wrapper}>
      <Icon name="cart" size={20} />
      <Button text="Contact" bgColor="yellow" />
    </div>
  )
}

export default Cart