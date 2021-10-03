import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  cart: ['123456'],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getCart: (state) => {
      state.cartLoading = true
    },
    getCartSuccess: (state, { payload }) => {
      state.cart = payload.data
      state.cartLoading = false
      state.cartHasErrors = false
    },
    getCartFailure: (state) => {
      state.cartLoading = false
      state.cartHasErrors = true
    },
  },
})

export const { getCart, getCartSuccess, getCartFailure } = cartSlice.actions

export const cartSelector = (state) => state.cart

export default cartSlice.reducer

export function fetchCart() {
  return async (dispatch) => {
    dispatch(getCart())
  }
}
