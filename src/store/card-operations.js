import { createAsyncThunk } from "@reduxjs/toolkit";

const addProduct = createAsyncThunk(
  //add to state new
  "card/addProduct",
  async (product, { rejectWithValue, getState }) => {
    const state = getState();
    return state.products.push(product);
  }
);

const operations = {
  addProduct,
};

export default operations;
