import { createSlice } from '@reduxjs/toolkit'

const products = [
  {
    name: 'Astronauts',
    id: '123456',
    price: '$100',
    thumbnail: 'a.jpg',
  },
  {
    name: 'Alien',
    id: '654321',
    price: '$200',
    thumbnail: 'b.jpg',
  },
]

export const initialState = {
  products: products,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state) => {
      state.productsLoading = true
    },
    getProductsSuccess: (state, { payload }) => {
      state.products = payload.data
      state.productsLoading = false
      state.productsHasErrors = false
    },
    getProductsFailure: (state) => {
      state.productsLoading = false
      state.productsHasErrors = true
    },
  },
})

export const { getProducts, getProductsSuccess, getProductsFailure } =
  productsSlice.actions

export const productsSelector = (state) => state.products

export default productsSlice.reducer

export function fetchProducts() {
  return async (dispatch) => {
    dispatch(getProducts())
  }
}
