import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from './action'

const initialState = {
  products: [],
  auth: Boolean(localStorage.getItem("token")),
  token: localStorage.getItem("token"),
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload
    })
  }
})

export const { } = appSlice.actions

export default appSlice.reducer