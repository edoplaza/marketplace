import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../../helpers/products'

import './styles.scss'

const Home = () => {
  return (
    <div className="home">
      <h2 className="home-title">Welcome to our shop!</h2>

      <p className="home-featured">
        You are probably interested in
        <Link to={`/products/${products[0].id}`} products={products}>
          {` ${products[0].name}`}
        </Link>
      </p>
      <p className="home-newest">
        Check out the newest product:
        <Link to={`/products/${products[1].id}`} products={products}>
          {` ${products[1].name}`}
        </Link>
      </p>
    </div>
  )
}

export default Home
