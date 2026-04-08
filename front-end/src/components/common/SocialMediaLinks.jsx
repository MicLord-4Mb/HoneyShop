import React from 'react'
import StyleSheet from './SocialMediaLinks.module.css'
import SocIcon from '../ui/Links/SocIcon';

const SocialMediaLinks = () => {
  return (
    <div className={StyleSheet.wrapper}>
      <SocIcon className={StyleSheet.icon} name="facebook" size={36} color="var(--orange-color)" href="#" />
      <SocIcon className={StyleSheet.icon} name="instagram" size={36} color="var(--orange-color)" href="#" />
      <SocIcon className={StyleSheet.icon} name="twitter" size={36} color="var(--orange-color)" href="#" />
    </div>
  )
}

export default SocialMediaLinks