import React from 'react'
import StyleSheet from './Menu.module.css'

const Menu = () => {
  return (
    <nav className={StyleSheet.nav}>
        <ul>
          <li className={StyleSheet.navItem}>
            <a href="#">Home</a>
          </li>
          <li className={StyleSheet.navItem}>
            <a href="#">Pages</a>
          </li>
          <li className={StyleSheet.navItem}>
            <a href="#home">Products</a>
          </li>
          <li className={StyleSheet.navItem}>
            <a href="#home">Blog</a>
          </li>
          <li className={StyleSheet.navItem}>
            <a href="#home">Portfolio</a>
          </li>
        </ul>
    </nav>
  )
}

export default Menu