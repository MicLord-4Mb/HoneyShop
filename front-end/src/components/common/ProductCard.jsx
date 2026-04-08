import React from 'react'
import StyleSheet from './ProductCard.module.css'
import Button from '../ui/Links/Button'
import Icon from '../ui/Icon'

const ProductCard = ({ title, price = '$0.00', desc, imageUrl = '' }) => {
  return (
    <article className={StyleSheet.card}>
      <div className={StyleSheet.imageWrapper}>
        <img src={imageUrl} alt={title} />
      </div>
      
      <h3 className={StyleSheet.title}>{title}</h3>

      <span className={StyleSheet.price}>{price}</span>

      <p className={StyleSheet.desc}>{desc}</p>
      
      <Button 
        text={
          <div className={StyleSheet.btContent}>
            <Icon name="cart" size={20} />
            <span>Add to Cart</span>
          </div>
        } 
        bgColor="black" 
      />
    </article>
  )
}

export default ProductCard