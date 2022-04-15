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
    addProduct: (state, { payload }) => {
      //set quantity of new product
      const updatedProduct = {
        ...payload,
        quantity: payload.quantity
          ? (payload.quantity += 1)
          : (payload.quantity = 1),
      };
      if (!state.products.find((product) => product.id === updatedProduct.id)) {
        state.products.push(updatedProduct);
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
    increaseQuantity: (state, action) => {
      state.products.map((product) =>
        product.id === action.payload.id ? (product.quantity += 1) : null
      );
    },
    decreaseQuantity: (state, action) => {
      state.products.map((product) =>
        product.id === action.payload.id && product.quantity > 0
          ? (product.quantity -= 1)
          : null
      );
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
  increaseQuantity,
  decreaseQuantity,
  applyVoucher,
  productsPurchased,
} = cartSlice.actions;

export default cartSlice.reducer;
