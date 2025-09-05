import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchProducts=createAsyncThunk('products',async()=>{
    const resp=await fetch('https://dummyjson.com/products');
    const jsonResp=await resp.json();
    return jsonResp.products
})

const initialState={
    items:[],
    status:undefined,
    error:null
}
const productsSlice=createSlice({
    name:'productSlice',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.status='succeeded',
            state.items=action.items  
        })
    }
})

export default productsSlice.reducer