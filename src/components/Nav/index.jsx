import React from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul className="main-nav-list">
        <li className="main-nav-item">
          <Link to="/products">Products</Link>
        </li>
        <li className="main-nav-item">
          <Link to="/cart">
            <i className="fa fa-shopping-cart" />
            Cart
            <span className="cart-number">0</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
