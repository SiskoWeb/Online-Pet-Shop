import { configureStore } from '@reduxjs/toolkit'
import authReducer from './AuthSlices/authSlice'
import categoriesReducer from './CategoriesSlice/categoriesSlice'
import ProductsSlice from './productsSlice/ProductsSlice'
export const store = configureStore({
    reducer: {

        auth: authReducer,
        categories: categoriesReducer,
        products: ProductsSlice,
    },
    devTools: true
})