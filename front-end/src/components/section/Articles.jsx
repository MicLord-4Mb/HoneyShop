import React from 'react'
import StyleSheet from './Articles.module.css'
import Article from '../common/Article'
import { homeArticle1, homeArticle2, homeArticle3, homeArticle4 } from '../../assets';
import Container from '../layout/Container';

const Articles = () => {
  return (
    <section className={StyleSheet.wrapper}>
      <Container className={StyleSheet.contentContainer}>  
        <h2 className={StyleSheet.title}>types of honey</h2>
        <p className={StyleSheet.desc}>
            Learn more about some of the products we take special pride in.
        </p>
        <section className={StyleSheet.articlesGrid}>  
            <Article
                title="Forest Honey"
                desc='Id fierent ullamcorper concludaturque mei. Sed summo admodum honestatis ad Id fierent.'
                imageUrl={homeArticle1}
                articleUrl="#"
            />
            <Article
                title="Meadow Honey"
                desc='Id fierent ullamcorper concludaturque mei. Sed summo admodum honestatis ad Id fierent.'
                imageUrl={homeArticle2}
                articleUrl="#"
            />
            <Article
                title="Creamed Honey"
                desc='Id fierent ullamcorper concludaturque mei. Sed summo admodum honestatis ad Id fierent.'
                imageUrl={homeArticle3}
                articleUrl="#"
            />
            <Article
                title="Liquid Honey"
                desc='Id fierent ullamcorper concludaturque mei. Sed summo admodum honestatis ad Id fierent.'
                imageUrl={homeArticle4}
                articleUrl="#"
            />
        </section>
        </Container>
    </section>
  )
}

export default Articles