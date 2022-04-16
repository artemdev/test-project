import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    currentProduct: null,
    currentCoupon: null,
  },
  reducers: {
    addProduct: (state, { payload }) => {
      const updatedProduct = {
        ...payload,
        quantity: payload.quantity
          ? (payload.quantity += 1)
          : (payload.quantity = 1),
        appliedVouchers: [],
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
    applyVoucher: (state, _action) => {
      state.products.forEach((product) => {
        const currentCouponFull =
          state.currentProduct.vouchers.find(
            (voucher) => voucher.name === state.currentCoupon
          ) || null;
        !product.appliedVouchers.find(
          (coupon) => coupon.id === currentCouponFull.id
        ) && product.appliedVouchers.push(currentCouponFull);
      });
    },
    productsPurchased: (state, action) => {},

    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
    setCurrentCoupon: (state, action) => {
      state.currentCoupon = action.payload;
    },
    emptyCart: (state, _action) => {
      state.products = [];
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
  setCurrentProduct,
  setCurrentCoupon,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;
