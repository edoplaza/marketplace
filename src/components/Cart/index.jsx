import React from 'react'

const Cart = () => {
  function cartItems() {
    return []
  }

  return (
    <div>
      Are you ready to purchase these?
      <ul>
        {cartItems().map((cartItem) => (
          <li key={cartItem}>{cartItem}</li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
