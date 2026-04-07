import React from 'react'
import StyleSheet from './Icon.module.css'
import CartIcon from '../../assets/icons/cart-icon.svg?react';
import ChatIcon from '../../assets/icons/chat-icon.svg?react';
import Chevron from '../../assets/icons/chevron-icon.svg?react';
import Quote from '../../assets/icons/quote-icon.svg?react';

const iconTypes = {
  cart: CartIcon,
  chat: ChatIcon,
  chevron: Chevron,
  quote: Quote,
};

const Icon = ({ name, size = 24, color, className = ''}) => {
  const SelectedIcon = iconTypes[name];

  if (!SelectedIcon) {
    console.error(`Icon not found for name: ${name}`);
    return null;
  }


  return (
    <span 
      className={`${StyleSheet.iconConteiner} ${className}`}
      style={{ 
        width: size,
        height: size, 
        color: color || 'currentColor' 
      }}
    >
      <SelectedIcon />
    </span>
  )
}

export default Icon
