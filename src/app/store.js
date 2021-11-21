import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
/* When you create a slice, import it here */
// import countReducer from '../features/TestCounterSlice.js'

export const store = configureStore({
  reducer: {
    /* count: countReducer */
    cart:cartSlice
  },
});
