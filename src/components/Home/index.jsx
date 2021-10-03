import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../../helpers/products'

const Home = () => {
  return (
    <div className="home">
      Welcome to our shop!
      <p>
        You are probably interested in
        <Link to={`/products/${products[0].id}`} products={products}>
          {` ${products[0].name}`}
        </Link>
      </p>
      <p>
        Check out the newest product
        <Link to={`/products/${products[1].id}`} products={products}>
          {` ${products[1].name}`}
        </Link>
      </p>
    </div>
  )
}

export default Home
