import { createAsyncThunk } from "@reduxjs/toolkit";

const addProduct = createAsyncThunk(
  //add to state new
  "card/addProduct",
  async (product, { rejectWithValue, getState }) => {
    const state = getState();
    return state.products.push(product);
  }
);

const increaseQuantity = createAsyncThunk(
  //add to state new
  "card/increaseQuantity",
  async (product, { rejectWithValue, getState }) => {
    const state = getState();
    return state.products.push(product);
  }
);
const descreaseQuantity = createAsyncThunk(
  //add to state new
  "card/descreaseQuantity",
  async ({ id }, { rejectWithValue, getState }) => {
    const state = getState();
    const products = state.products.map((product) =>
      product.id === id ? (product.quantity += 1) : null
    );
    return (state.products = products);
  }
);
const operations = {
  addProduct,
  descreaseQuantity,
};

export default operations;
