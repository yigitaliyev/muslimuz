import { createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "../api"

export const fetchProducts = createAsyncThunk(
    'app/fetchProduct',
    async () => await api.fetchProducts()

)