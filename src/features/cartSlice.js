import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products = [
        ...state.products,
        {
          title: action.payload.title,
          description: action.payload.description,
          image: action.payload.image,
        },
      ];
    },

    removeProduct: (state, action) => {},
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
