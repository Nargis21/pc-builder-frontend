import { configureStore } from '@reduxjs/toolkit'
import { api } from './api/apiSlice'
import productReducer from './features/product/productSlice'

export const store = configureStore({
    reducer: {
        product: productReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})