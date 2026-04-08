import React from 'react'
import Icon from '../Icon'
import StyleSheet from './SocIcon.module.css'

const SocIcon = ({ name, size = 24, color, href = "#" }) => {
  return (
    <a href={href} className={StyleSheet.link}>
      <Icon name={name} size={size} color={color} className={StyleSheet.icon} />
    </a>
  )
}

export default SocIcon