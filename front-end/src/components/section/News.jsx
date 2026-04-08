import React from 'react'
import StyleSheet from './MissonNews.module.css'
import Container from '../layout/Container'
import NewsArticle from '../common/NewsArticle'
import TextLink from '../ui/Links/TextLink'

const News = () => {
  return (
    <section className={StyleSheet.wrapper}>
      <Container className={StyleSheet.contentContainer}>
        <h2 className={StyleSheet.title}>News</h2>
        <NewsArticle
          date="May 14, 2020"
          title="Sweet Honey Packs Fresh Raw and Unfiltered"
          desc="Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur officia des." 
        />
        <NewsArticle
          date="May 14, 2020"
          title="Raw Bee Honey Products And Beekeeping"
          desc="Dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia des null." 
        /> 
        <NewsArticle
          date="May 13, 2020"
          title="Bees – Honey Bees and Beekeeping Online Guide"
          desc="Voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint sunt in culpa qui officia des cupidatat non." 
        />
        <TextLink text="show more news" href="#" color="black" size='14' />   
      </Container>
    </section>
  )
}

export default News