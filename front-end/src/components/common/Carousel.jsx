import React, { useState } from 'react'
import StyleSheet from './Carousel.module.css'
import Container from '../layout/Container'
import { 
    homeGallery1,
    homeGallery6, 
    homeGallery7, 
    homeGallery8, 
    homeGallery9, 
    homeGallery10, 
    homeGallery11 } from '../../assets'
import Icon from '../ui/Icon';
    
const images = [
    homeGallery1,
    homeGallery6, 
    homeGallery7, 
    homeGallery8, 
    homeGallery9, 
    homeGallery10, 
    homeGallery11
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={StyleSheet.wrapper}>
      <Container className={StyleSheet.contentContainer}>
        <img 
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className={StyleSheet.image}
        />

        <div className={StyleSheet.overlay} onClick={nextSlide}>
          <div className={StyleSheet.iconWrapper}>
            <Icon 
              name="chevron" 
              size={32} 
              color="var(--orange-color, #C74817)" 
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Carousel