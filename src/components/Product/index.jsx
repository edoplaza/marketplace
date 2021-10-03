import React from 'react'
import { useParams } from 'react-router-dom'

import './styles.scss'

const Product = ({ products }) => {
  const { id } = useParams()

  return (
    <div className="product">
      {products
        .filter((product) => product.id === id)
        .map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-info">
              <div className="product-thumbnail">
                <img
                  src={`/assets/images/${product.thumbnail}`}
                  alt={product.name}
                />
              </div>
              <div className="product-description">
                <p className="product-description-item">
                  Name: <span>{product.name}</span>
                </p>
                <p className="product-description-item">
                  Price: <span>{product.price}</span>
                </p>
                <button className="product-add">
                  <i className="fa fa-shopping-cart"></i>Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Product
