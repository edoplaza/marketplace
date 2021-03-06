import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, productsSelector } from '../../slices/products'
import { addCartItem } from '../../slices/cart'

import Button from '../UI/Button'

import './styles.scss'

const Product = () => {
  const dispatch = useDispatch()
  const { products } = useSelector(productsSelector)
  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

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

                <Button
                  classname="button-big"
                  onClick={() => dispatch(addCartItem(product.id))}
                  text="Add to Cart"
                  icon="shopping-cart"
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Product
