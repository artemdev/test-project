import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [
      // {
      //   //   id: "62066c40496d28ee6a659843",
      //   //   name: "Soprano",
      //   //   price: 1127.95,
      //   //   image: "https://loremflickr.com/480/600/product?random=0",
      //   //   vouchers: [],
      // },
    ],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      //
    },
    updateQuantity: (state, action) => {
      //
    },
    applyVoucher: (state, action) => {
      //
    },
    productsPurchased: (state, action) => {
      //
    },
  },
});

export const {
  addProduct,
  removeProduct,
  updateQuantity,
  applyVoucher,
  productsPurchased,
} = cartSlice.actions;

export default cartSlice.reducer;
