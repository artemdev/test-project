import { createSlice } from "@reduxjs/toolkit";
import productsOperations from "./products-operations";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
  },
  extraReducers: {
    [productsOperations.fetchProducts.fulfilled](state, action) {
      state.data = action.payload;
    },
  },
});

export default productsSlice.reducer;
