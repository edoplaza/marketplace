import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartItems, cartSelector } from '../../slices/cart'

import './styles.scss'

const Nav = () => {
  const dispatch = useDispatch()
  const { cart } = useSelector(cartSelector)

  useEffect(() => {
    dispatch(fetchCartItems())
  }, [dispatch])

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
            <span className="cart-number">{cart.length}</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
