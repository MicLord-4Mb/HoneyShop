import React from 'react'
import StyleSheet from './Footer.module.css'
import SocialMediaLinks from '../common/SocialMediaLinks';
import { footerPng3 } from '../../assets';

const Footer = () => {
  return (
    <footer className={StyleSheet.wrapper}>
      <SocialMediaLinks />
      <img src={footerPng3} alt="" className={StyleSheet.imgFooter} />
      <p className={StyleSheet.copyRights}>© 2020 Qode Interactive All Rights Reserved</p>
    </footer>
  )
}

export default Footer