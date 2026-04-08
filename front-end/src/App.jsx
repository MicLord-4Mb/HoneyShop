import React from 'react'
import {
  MainLayout, 
  MissonNews, 
  ProductGrid, 
  Testimonial, 
  Gallary, 
  Newletter,
  Articles
} from './components'

const App = () => {
  return (
    <MainLayout>
      <MissonNews />
      <ProductGrid />
      <Testimonial />
      <Gallary />
      <Newletter />
      <Articles />
    </MainLayout>
  )
} 

export default App