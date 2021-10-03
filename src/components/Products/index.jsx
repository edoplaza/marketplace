import React, { useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, productsSelector } from '../../slices/products'

import './styles.scss'

const Products = () => {
  const dispatch = useDispatch()
  const { products } = useSelector(productsSelector)
  let { url } = useRouteMatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className="products">
      <h2 className="products-title">Products</h2>
      <ul className="products-list">
        {products.map((product) => {
          return (
            <li className="products-list-item" key={product.id}>
              <Link to={`${url}/${product.id}`}>
                <div className="products-item">
                  <div className="products-item-image">
                    <img
                      src={`/assets/images/${product.thumbnail}`}
                      alt={product.name}
                    />
                  </div>
                  <h2 className="products-item-name">{product.name}</h2>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Products
