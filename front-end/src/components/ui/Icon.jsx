import React from 'react'
import StyleSheet from './Icon.module.css'
import { ReactComponent as CartIcon } from '../../assets/icons/cart-icon.svg';
import { ReactComponent as ChatIcon } from '../../assets/icons/chat-icon.svg';
import { ReactComponent as Chevron } from '../../assets/icons/chevron.svg';
import { ReactComponent as Quote } from '../../assets/icons/quote-icon.svg';

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
    <span className={`${StyleSheet.iconConteiner} ${className}`}
        style={{ 
            width: size,
            height: size, 
            color: color || 'currentColor' 
        }}
    >
        <SelectedIcon width="100%" height="100%" />
    </span>
  )
}

export default Icon