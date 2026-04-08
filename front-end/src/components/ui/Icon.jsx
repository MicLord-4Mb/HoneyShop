import React from 'react'
import StyleSheet from './Icon.module.css'
import { CartIcon, ChatIcon, Chevron, Quote, FacebookIcon, InstagramIcon, TwitterIcon } from '../../assets/icons';

const iconTypes = {
  cart: CartIcon,
  chat: ChatIcon,
  chevron: Chevron,
  quote: Quote,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon
};

const Icon = ({ name, size = 24, color, className = ''}) => {
  const SelectedIcon = iconTypes[name];

  if (!SelectedIcon) {
    console.error(`Icon not found for name: ${name}`);
    return null;
  }


  return (
    <span 
      className={`${StyleSheet.iconContainer} ${className}`}
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
