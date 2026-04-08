import React from 'react'
import StyleSheet from './Container.module.css'

const Container = ({ children, className }) => {
  return (
    <div className={`${StyleSheet.container} ${className || ''}`}>
      {children}
    </div>
  )
}

export default Container