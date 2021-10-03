import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { products } from '../../helpers/products'

const Products = () => {
  let { url } = useRouteMatch()

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`${url}/${product.id}`}>{product.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Products
