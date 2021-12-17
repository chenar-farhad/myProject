import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { appApiSlice } from "../services/app.api";
import cartSlice from "../features/cartSlice";
import userSlice from "../features/userSlice";

/* When you create a slice, import it here */
// import countReducer from '../features/TestCounterSlice.js'

export const store = configureStore({
  reducer: {
    /* count: countReducer */
    cart: cartSlice,
    user: userSlice,

    [appApiSlice.reducerPath]: appApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApiSlice.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
