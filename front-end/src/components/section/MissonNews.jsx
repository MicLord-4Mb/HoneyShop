import React from 'react'
import StyleSheet from './MissonNews.module.css'
import Container from '../layout/Container'
import Misson from '../common/Misson'
import News from './News'

const MissonNews = () => {
  return (
    <section className={StyleSheet.wrapper}>
      <Container className={StyleSheet.contentContainer}>
        <Misson />
        <News />
      </Container>
    </section>
  )
}


export default MissonNews