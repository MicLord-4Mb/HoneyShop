import React from 'react'
import StyleSheet from './HeroSection.module.css'

const HeroSection = () => {
  return (
    <div className={StyleSheet.wrapper}>
      <h2 className={StyleSheet.subtitle}>FRESH & SWEET AS HONEY.</h2>
      <h1 className={StyleSheet.title}>HONEY BEE</h1>
      <p className={StyleSheet.description}>
        Lorem ipsum dolor sit amet, sint nostrum mea ut, vel semper vidisse eu usu temporibus disputationi voluptatibus in ei est possit salutandi abhorrea acusata, ad cum eruditi expetendis. Ad cum eruditi expetendis.
      </p>
      <a href="#products" className={StyleSheet.button}>VIEW MORE</a>
    </div>
  )
}

export default HeroSection