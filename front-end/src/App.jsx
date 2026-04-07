import React from 'react'
import {MainLayout, HeroSection, MissonNews, ProductGrid, Testimonial, Gallary, Newletter} from './components'

const App = () => {
  return (
    <MainLayout>
      <MissonNews />
      <ProductGrid />
      <Testimonial />
      <Gallary />
      <Newletter />
    </MainLayout>
  )
} 

export default App