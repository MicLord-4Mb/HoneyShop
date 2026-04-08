import React from 'react'
import StyleSheet from './Articles.module.css'
import Article from '../common/Article'

const Articles = () => {
  return (
    <section className={StyleSheet.wrapper}>
        <Article />
    </section>
  )
}

export default Articles