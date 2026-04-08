import React from 'react'
import StyleSheet from './Newletter.module.css'
import Container from '../layout/Container'
import { background3 } from '../../assets';

const Newletter = () => {
  return (
    <section className={StyleSheet.wrapper} style={{ backgroundImage: `url(${background3})` }}>
      <Container className={StyleSheet.contentContainer}>
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay updated with our latest news and offers!</p>
        <form className={StyleSheet.form}>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </Container>
    </section>
  )
}

export default Newletter