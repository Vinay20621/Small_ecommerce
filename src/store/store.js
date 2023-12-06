import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './Slice/productSlice'
import CartReducer from './Slice/cartSlice'

 export const store=configureStore({
    reducer:
    {
        products:ProductReducer,
        cart:CartReducer
    }
})