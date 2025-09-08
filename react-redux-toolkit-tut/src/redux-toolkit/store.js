import {configureStore} from "@reduxjs/toolkit";
import productsReducer from './productSlice';
import cartReducer from './slice';
const store = configureStore({
reducer:{
    cart:cartReducer, //register slice
    products:productsReducer //register productSlice
}
})
export default store;

