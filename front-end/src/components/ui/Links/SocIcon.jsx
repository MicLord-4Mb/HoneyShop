import React from 'react'
import StyleSheet from './sIcon.module.css'

const sIcon = ({ text, href = "#" }) => {
  return (
    <a href={href} className={StyleSheet.link}>
      <span className={StyleSheet.icon}>{text}</span>
    </a>
  )
}

export default sIcon