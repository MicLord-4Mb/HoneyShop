import React from 'react'
import StyleSheet from './Cart.module.css'
import Button from '../ui/Links/Button';
import Icon from '../ui/Icon';

const Cart = () => {
  return (
    <div className={StyleSheet.wrapper}>
      <Icon name="cart" />
      <Button text="Contact" variant="yellow" />
    </div>
  )
}

export default Cart