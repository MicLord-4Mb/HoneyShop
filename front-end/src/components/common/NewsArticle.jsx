import React from 'react'
import StyleSheet from './NewsArticle.module.css'

const NewsArticle = ({ date, title, desc }) => {
  return (
    <div className={StyleSheet.newsArticle}>
      <p className={StyleSheet.date}>{date}</p>
      <h3 className={StyleSheet.title}>{title}</h3>
      <p className={StyleSheet.desc}>{desc}</p>
    </div>
  )
}

export default NewsArticle