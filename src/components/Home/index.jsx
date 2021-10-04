import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, productsSelector } from '../../slices/products'

import PageTitle from '../UI/PageTitle'

import './styles.scss'

const Home = () => {
  const dispatch = useDispatch()
  const { products } = useSelector(productsSelector)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className="home">
      <PageTitle text="Welcome to Our Shop!" />

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
