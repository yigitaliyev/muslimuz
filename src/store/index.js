import { configureStore } from '@reduxjs/toolkit'
import  appSlice  from './reduser'

export const store = configureStore({
  reducer: appSlice,
})