import React from 'react'
import StyleSheet from './Article.module.css'
import TextLink from '../ui/Links/TextLink'
import Container from '../layout/Container'

const Article = ({ title, desc, imageUrl, articleUrl="#"} ) => {
  return (
    <article className={StyleSheet.wrapper}>
      <div className={StyleSheet.imageWrapper}>
        <img src={imageUrl} alt={title} />
      </div>
      <Container className={StyleSheet.content}>
        <h3 className={StyleSheet.title}>{title}</h3>
        <p className={StyleSheet.description}>{desc}</p>

        <TextLink text="Learn More" href={articleUrl} />
      </Container>
    </article>
  )
}

export default Article