import React from 'react';
import StyleSheet from './TextLink.module.css';
import Icon from '../Icon';

const TextLink = ({ text, href = "#", size = "14" }) => {
  return (
    <a href={href} 
      className={StyleSheet.link}
      style={{ '--lnk-font-size': `${size}px` }}
    >
      {text}
      <span className={StyleSheet.icon}>
        <Icon name="chevron" size={size-4} />
      </span>
    </a>
  );
};

export default TextLink;