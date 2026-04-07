import React from 'react'
import StyleSheet from './HeroSection.module.css'
import Button from '../ui/Links/Button';
import { h1Rev12 } from '../../assets'

const HeroSection = () => {
  return (
    <div className={StyleSheet.wrapper}>
      <div className={StyleSheet.content}>
        <h2 className={StyleSheet.subtitle}>FRESH & SWEET AS HONEY.</h2>
        <h1 className={StyleSheet.title}>HONEY BEE</h1>
        <p className={StyleSheet.description}>
          Lorem ipsum dolor sit amet, sint nostrum mea ut, vel semper vidisse eu usu temporibus disputationi voluptatibus in ei est possit salutandi abhorrea acusata, ad cum eruditi expetendis. Ad cum eruditi expetendis.
        </p>
        <span className={StyleSheet.btnWrapper}>
          <Button text="View More" variant="orange" />
        </span>
      </div>
      <div className={StyleSheet.imageWrapper}>
        <img src={h1Rev12} alt="Hero" className={StyleSheet.image} />
      </div>
    </div>
  )
}

export default HeroSection