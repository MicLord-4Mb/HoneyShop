import React from 'react'
import StyleSheet from './Gallary.module.css'
import Container from '../layout/Container'
import GallaryCard from '../common/GallaryCard'
import { 
  homeGallery6, 
  homeGallery7, 
  homeGallery8, 
  homeGallery9, 
  homeGallery10,
  homeGallery11, 
} from '../../assets'; 


const Gallary = () => {
  return (
    <section className={StyleSheet.wrapper}>
      <Container className={StyleSheet.contentContainer}>
        <h2 className={StyleSheet.title}>Our Gallary</h2>
        <p className={StyleSheet.desc}>
          Explore our vibrant gallery showcasing the beauty of bees, 
          their hives, and the art of beekeeping. From close-up shots
          of buzzing bees to serene landscapes of blooming flowers,
          our gallery captures the essence of nature's pollinators in
          all their glory.
        </p>
        <section className={StyleSheet.gallaryGrid}>
          <GallaryCard imageUrl={homeGallery6} />
          <GallaryCard imageUrl={homeGallery7} />
          <GallaryCard imageUrl={homeGallery8} />
          <GallaryCard imageUrl={homeGallery9} />
          <GallaryCard imageUrl={homeGallery10} />
          <GallaryCard imageUrl={homeGallery11} />
        </section>
      </Container>
    </section>
  )
}

export default Gallary