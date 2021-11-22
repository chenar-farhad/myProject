import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    // {
    //   title: "titleeee",
    //   description: "fsfsdfffdsf",
    //   image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    // },
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
      state.products.splice( action.payload,1);
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
