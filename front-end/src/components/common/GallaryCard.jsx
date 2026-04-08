import React from 'react'
import StyleSheet from './GallaryCard.module.css'

const GallaryCard = ({ imageUrl }) => {
  return (
    <div className={StyleSheet.wrapper}>
      <img src={imageUrl} alt="Gallery Image" className={StyleSheet.image} />
    </div>
  )
}

export default GallaryCard