import React from 'react'
import StyleSheet from './MainLayout.module.css'
import Header from './Header'
import Footer from './Footer'

const MainLayout = ({ children }) => {
  return (
    <div className={StyleSheet.appWrapper}>
      <Header />
      <main className={StyleSheet.mainContent}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
