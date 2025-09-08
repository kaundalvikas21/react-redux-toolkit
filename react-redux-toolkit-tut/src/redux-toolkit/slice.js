import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

// slice name, addToCart
export const addToCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state,action) => { // called action
      // state.value += 1; //increment value by 1 
      console.log(action.payload);
      state.items.push(action.payload)
    },
    removeItem: (state) => {
      state.value > 0 ? (state.value -= 1) : null;
    },
    clearAllItems: (state) => {
      state.value = 0;
    },
  },
});

export const{addItem,removeItem,clearAllItems} = addToCart.actions;
export default addToCart.reducer
