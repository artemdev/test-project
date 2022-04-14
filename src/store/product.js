import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsOperations from "./products-operations";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {}
);

export const fetchVouchers = createAsyncThunk(
  "products/fetchVouchers",
  async () => {}
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    currentProducts: [],
  },
  extraReducers: {
    // fetchProducts
    [productsOperations.fetchProducts.fulfilled](state, action) {
      state.currentProducts = action.payload;
    },
    // fetchVouchers
    [productsOperations.fetchVouchers.fulfilled](state, _) {
      state.isOpen = false;
    },
  },
});

export default productsSlice.reducer;
