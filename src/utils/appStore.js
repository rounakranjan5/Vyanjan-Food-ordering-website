import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const appStore=configureStore({
    // whole app's reducer
    reducer:{
        cart:cartReducer
    }
});

export default appStore