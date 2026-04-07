import React from 'react'
import {logo} from '../../assets'
import StyleSheet from './Logo.module.css'

const Logo = () => {
  return (
    <div className={StyleSheet.wrapper}>
      <img src={logo} alt="MELLIFERA" className={StyleSheet.logo} />
    </div>
  )
}

export default Logo