import { createSlice } from "@reduxjs/toolkit";
let storageCart = JSON.parse(localStorage.getItem("cart") || "[]");

const initialState = {
  cartItems: storageCart,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cartItems = [
        ...state.cartItems,
        {
          _id: action.payload._id,
          title: action.payload.title,
          description: action.payload.description,
          image: action.payload.image,
          price: action.payload.price,
          amount: action.payload.amount,
        },
      ];
    },

    removeProduct: (state, action) => {
      let newCartItems = state.cartItems.filter((product) => {
        return product._id !== action.payload;
      });
      state.cartItems = newCartItems;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    incrementQuantity: (state, action) => {
      let itemIndex = state.cartItems.findIndex(
        (product) => product._id === action.payload
      );
      state.cartItems[itemIndex].amount++;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    decrementQuantity: (state, action) => {
      let itemIndex = state.cartItems.findIndex(
        (product) => product._id === action.payload
      );
      state.cartItems[itemIndex].amount--;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
});

export const {
  addProduct,
  removeProduct,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
