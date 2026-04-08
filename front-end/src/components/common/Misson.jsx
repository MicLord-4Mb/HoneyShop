import React from 'react'
import styleSheet from './Misson.module.css'
import Container from '../layout/Container'
import { homeGallery1, h1Img2 } from '../../assets'

const Misson = () => {
  return (
    <section className={styleSheet.wrapper}>
      <Container className={styleSheet.contentContainer}>
        <div className={styleSheet.imageContainer}>
          <img src={homeGallery1} alt="Gallery 1" />
        </div>

        <div className={styleSheet.textContainer}>
          <h2 className={styleSheet.title}>Our Mission</h2>
          <p className={styleSheet.desc}>
            The bees live as they naturally would and their benefits
            reach more people. Our goal is to raise  <strong>San Diego’s bee
            population</strong> throughout the city and at the same time <strong>spread
            awareness among the community.</strong>
          </p>
          <p className={styleSheet.desc}>
            Our hope is that these backyard hives will facilitate
            a dialogue among neighbours, friends, family and the community
            at large about the huge importance of bees.
          </p>
        </div>

        <img src={h1Img2} alt="sign" className={styleSheet.signImage}/>

      </Container>
    </section>
  )
}

export default Misson