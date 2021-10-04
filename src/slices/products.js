import { createSlice } from '@reduxjs/toolkit'
import { products } from '../helpers/products'

export const initialState = {
  products: products,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state) => state,
  },
})

export const { getProducts } = productsSlice.actions

export const productsSelector = (state) => state.products

export default productsSlice.reducer

export function fetchProducts() {
  return async (dispatch) => {
    dispatch(getProducts())
  }
}
