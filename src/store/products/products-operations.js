import { createAsyncThunk } from "@reduxjs/toolkit";
import products from "../../data/products.json";

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (_, { _rejectWithValue, _getState }) => {
    return products.map((product) => {
      return { ...product, quantity: 0 };
    });
  }
);

const operations = {
  fetchProducts,
};

export default operations;
