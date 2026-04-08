import React from 'react'
import StyleSheet from './Testimonial.module.css'
import Container from '../layout/Container'
import { homeTestimonial2, background2 } from '../../assets';
import Icon from '../ui/Icon';

const Testimonial = () => {
  return (
    <section
      className={StyleSheet.wrapper}
      style={{ backgroundImage: `url(${background2})` }}
    >
      <Container className={StyleSheet.contentContainer}>
        <div className={StyleSheet.imgeWrapper}>
          <img 
            src={homeTestimonial2} 
            alt="Testimonial" 
            className={StyleSheet.image}
          />
        
          <div className={StyleSheet.overlay}>
            <Icon 
              name="quote"
              size={36} 
              color='white' 
              className={StyleSheet.quoteIcon} 
            />
          </div>
        </div>

        <div className={StyleSheet.testimonial}>
          <blockquote className={StyleSheet.quote}>
            "Sed ut perspiciatis unde omnis iste natus error sit 
            voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi."
          </blockquote>
          <p className={StyleSheet.author}>Julia Klein</p>
          <p className={StyleSheet.position}>Biologist</p>
        </div>
      </Container>
    </section>
  )
}

export default Testimonial