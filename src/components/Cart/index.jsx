import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartItems, removeCartItem, cartSelector } from '../../slices/cart'
import { fetchProducts, productsSelector } from '../../slices/products'

import PageTitle from '../UI/PageTitle'
import Button from '../UI/Button'

import './styles.scss'

const Cart = () => {
  const dispatch = useDispatch()
  const { cart } = useSelector(cartSelector)
  const { products } = useSelector(productsSelector)

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchCartItems())
  }, [dispatch])

  return (
    <div className="cart">
      <PageTitle text="Cart" />

      {cart.length === 0 && (
        <>
          <p className="cart-message">
            Your cart is empty. <br />
            You can visit our <Link to="/products">products page</Link> and buy
            some cool models.
          </p>
        </>
      )}

      {cart.length > 0 && (
        <>
          <p className="cart-message">Are you ready to purchase these?</p>
          <ul className="cart-list">
            {products.map((product) => {
              if (cart.includes(product.id)) {
                return (
                  <div key={product.id} className="cart-list-item">
                    <div className="cart-list-item-image">
                      <img
                        src={`/assets/images/${product.thumbnail}`}
                        alt={product.name}
                      />
                    </div>
                    <h2 className="cart-list-item-info">
                      Name: <span>{product.name}</span>
                    </h2>
                    <h3 className="cart-list-item-info">
                      Price: <span>{product.price}</span>
                    </h3>

                    <Button
                      classname="button-small"
                      onClick={() => dispatch(removeCartItem(product.id))}
                      text=" Remove from Cart"
                      icon="times"
                    />
                  </div>
                )
              } else {
                return null
              }
            })}
          </ul>
        </>
      )}
    </div>
  )
}

export default Cart
