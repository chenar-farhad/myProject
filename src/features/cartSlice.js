import { createSlice } from "@reduxjs/toolkit";
import ProductCard from "../components/ProductCard";

const initialState = {
  products: [
    {
      title: "titleeee",
      description: "fsfsdfffdsf",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
  ],
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

    removeProduct: (state, action) => {
      state.products.splice(1,action.payload);
      // console.log(action.payload);
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
