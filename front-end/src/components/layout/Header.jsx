import React from 'react'
import StyleSheet from './Header.module.css'
import HeaderInner from '../section/HeaderInner'
import HeroSection from '../section/HeroSection'
  

const Header = () => {
  return (
    <header className={StyleSheet.hWrapper}>
      <HeaderInner />
      <HeroSection />
    </header>
  )
}

export default Header
