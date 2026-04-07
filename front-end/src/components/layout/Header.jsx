import React from 'react'
import StyleSheet from './Header.module.css'
import HeaderInner from '../section/HeaderInner'
import HeroSection from '../section/HeroSection'
import { h1Rev1, h1Rev7, h1Rev8, h1Rev9 } from '../../assets'
  

const Header = () => {
  return (
    <header className={StyleSheet.wrapper}>
      <img src={h1Rev1} className={StyleSheet.decLeaf1} alt="" />
      <img src={h1Rev7} className={StyleSheet.decLeaf2} alt="" />
      <img src={h1Rev8} className={StyleSheet.decLeaf3} alt="" />
      <img src={h1Rev9} className={StyleSheet.badge} alt="" />
      
      <HeaderInner />
      <HeroSection />
    </header>
  )
}

export default Header
