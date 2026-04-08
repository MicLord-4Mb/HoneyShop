import React from 'react'
import StyleSheet from './Testimonial.module.css'
import Container from '../layout/Container'
import { homeTestimonial2, background2 } from '../../assets';

const Testimonial = () => {
  return (
    <section
      className={StyleSheet.wrapper}
      style={{ backgroundImage: `url(${background2})` }}
    >
      <Container className={StyleSheet.contentContainer}>
        <img src={homeTestimonial2} alt="Testimonial" className={StyleSheet.image} />
        <div className={StyleSheet.testimonial}>
          <p className={StyleSheet.quote}>"This is a great product!"</p>
          <p className={StyleSheet.author}>- John Doe</p>
        </div>
      </Container>
    </section>
  )
}

export default Testimonial