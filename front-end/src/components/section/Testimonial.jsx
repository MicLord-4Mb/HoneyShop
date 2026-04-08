import React from 'react'
import StyleSheet from './Testimonial.module.css'

const Testimonial = () => {
  return (
    <div className={StyleSheet.wrapper}>
      <div className={StyleSheet.testimonial}>
        <p className={StyleSheet.quote}>"This is a great product!"</p>
        <p className={StyleSheet.author}>- John Doe</p>
      </div>
    </div>
  )
}

export default Testimonial