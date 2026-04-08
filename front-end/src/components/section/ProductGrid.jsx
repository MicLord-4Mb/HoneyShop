import React from 'react'
import StyleSheet from './ProductGrid.module.css'
import Container from '../layout/Container'
import ProductCard from '../common/ProductCard'
import { background1, homeProduct1, homeProduct2, homeProduct3 } from '../../assets';
  
const ProductGrid = () => {
  return (
    <div className={StyleSheet.wrapper} style={{ backgroundImage: `url(${background1})` }}>
      <Container className={StyleSheet.contentContainer}>
        <h2>Our Products</h2>
        <p>Discover our amazing collection of products!</p>
        <section className={StyleSheet.shopGrid}>
          <ProductCard 
            title="Product 1" 
            price="$19.99"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
            imageUrl={homeProduct1} 
          />
          <ProductCard 
            title="Product 2" 
            price="$29.99"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
            imageUrl={homeProduct2} 
          />
          <ProductCard 
            title="Product 3" 
            price="$39.99"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
            imageUrl={homeProduct3} 
          />
        </section>
      </Container>
    </div>
  )
}

export default ProductGrid