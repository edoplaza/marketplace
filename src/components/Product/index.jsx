import React from 'react'
import { useParams } from 'react-router-dom'

const Product = ({ products }) => {
  const { id } = useParams()

  return (
    <div className="product">
      {products
        .filter((product) => product.id === id)
        .map((product) => (
          <div className="product-card" key={product.id}>
            <h2>Name: {product.name}</h2>
            <p>Price: {product.price}</p>
          </div>
        ))}
    </div>
  )
}

export default Product
