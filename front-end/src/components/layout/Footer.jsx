import React from 'react'
import SocialMediaLinks from '../section/SocialMediaLinks';
import { footerPng3 } from '../../assets';

const Footer = () => {
  return (
    <footer>
      <SocialMediaLinks />
      <img src={footerPng3} alt="" />
      <p className='copyRights'>© 2020 Qode Interactive All Rights Reserved</p>
    </footer>
  )
}

export default Footer