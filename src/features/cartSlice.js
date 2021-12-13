import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      title: "نازانم چی",
      description: "شانی وایەو باڵی وایەشانی وایەو باڵی وایەشانی وایەو باڵی وایەشانی وایەو باڵی وایەشانی وایەو باڵی وایەشانی وایەو باڵی وایەشانی وایەو باڵی وایەسسس.",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      price: "500000",
    },
    {
      title: "titleeee",
      description: "fsfsdfffdsf",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      price: "5750",
    },
    {
      title: "titleeee",
      description: "fsfsdfffdsf",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      price: "20000"
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
          price: action.payload.price,
        },
      ];
    },

    removeProduct: (state, action) => {
      state.products.splice(action.payload, 1);
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
