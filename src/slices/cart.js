import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  cart: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getItems: (state) => state,

    addItem: (state, { payload }) => {
      if (!state.cart.includes(payload)) {
        state.cart = [...state.cart, payload]
      }
      return state
    },

    removeItem: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item !== payload)
      return state
    },
  },
})

export const { getItems, addItem, removeItem } = cartSlice.actions

export const cartSelector = (state) => state.cart

export default cartSlice.reducer

export function fetchCartItems() {
  return async (dispatch) => {
    dispatch(getItems())
  }
}

export function addCartItem(id) {
  return async (dispatch) => {
    dispatch(addItem(id))
  }
}

export function removeCartItem(id) {
  return async (dispatch) => {
    dispatch(removeItem(id))
  }
}
