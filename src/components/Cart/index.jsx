import React from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

const Cart = () => {
  function cartItems() {
    return []
  }

  return (
    <div className="cart">
      <h2 className="cart-title">Cart</h2>

      {cartItems.length === 0 && (
        <>
          <p className="cart-message">
            Your cart is empty. <br />
            You can visit our <Link to="/products">products page</Link> and buy
            some cool models.
          </p>
        </>
      )}

      {cartItems.length > 0 && (
        <>
          <p className="cart-message">Are you ready to purchase these?</p>
          <ul>
            {cartItems().map((cartItem) => (
              <li key={cartItem}>{cartItem}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default Cart
