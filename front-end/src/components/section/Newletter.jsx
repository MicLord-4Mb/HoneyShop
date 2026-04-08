import React from 'react'
import StyleSheet from './Newletter.module.css'
import Container from '../layout/Container'
import Button from '../ui/Links/Button'
import { background3, h1Img14 } from '../../assets';
import Articles from './Articles';

const Newletter = () => {
  return (
    <section 
      className={StyleSheet.wrapper} 
      style={{ backgroundImage: `url(${background3})` }}
    >
      <Container className={StyleSheet.contentContainer}>

        <div className={StyleSheet.imgWrapper}>
          <img src={h1Img14} alt="Newsletter" className={StyleSheet.image} />
        </div>

        <div className={StyleSheet.formWrapper}>
          <h2 className={StyleSheet.title}>Newsletter sign up</h2>
        
          <p className={StyleSheet.desc}>
            Neque porro quisquam est, 
            qui dolorem ipsum quia dolor sit amet, 
            consectetur, adipisci velit, 
            sed quia non numquam eius modi tempora incidunt 
            ut labore et dolore magnam aliquam quaerat 
            voluptatem dolores.
          </p>
        
          <form className={StyleSheet.form}>
            <input type="email" placeholder="Enter your email" />
            <Button type="submit" text="Subscribe" variant="orange" />
          </form>
        </div>
      
      </Container>
      
      <Articles />

    </section>
  )
}

export default Newletter