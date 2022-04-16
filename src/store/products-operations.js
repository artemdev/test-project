import { createAsyncThunk } from "@reduxjs/toolkit";
import products from "../data/products.json";
// import { token } from "../../services/api-auth";
// import { CREATE_ROOM_URL } from "../../helpers/routes";
// import * as API from '../../services/rooms-api';

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
