import React from 'react'
import StyleSheet from './ProductGrid.module.css'
import Container from '../layout/Container'
import ProductCard from '../common/ProductCard'
import { background1, homeProduct1, homeProduct2, homeProduct3 } from '../../assets';
  
const ProductGrid = () => {
  return (
    <section className={StyleSheet.wrapper} style={{ backgroundImage: `url(${background1})` }}>
      <Container className={StyleSheet.contentContainer}>
        <h2 className={StyleSheet.title}>Our Products</h2>
        <p className={StyleSheet.desc}>
          Check out our online shop for cute bee-themed apparel, unique bee suits, 
          educational tools, gift certificates and more.
        </p>
        <section className={StyleSheet.shopGrid}>
          <ProductCard 
            title="Heather Honey" 
            price="$19.99"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
            imageUrl={homeProduct1} 
          />
          <ProductCard 
            title="Jarrah Honey" 
            price="$29.99"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
            imageUrl={homeProduct2} 
          />
          <ProductCard 
            title="Linden Honey" 
            price="$39.99"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
            imageUrl={homeProduct3} 
          />
        </section>
      </Container>
    </section>
  )
}

export default ProductGrid