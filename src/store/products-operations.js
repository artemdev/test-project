import { createAsyncThunk } from "@reduxjs/toolkit";
import products from "../data/products.json";
// import { token } from "../../services/api-auth";
// import { CREATE_ROOM_URL } from "../../helpers/routes";
// import * as API from '../../services/rooms-api';

const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (products, { _rejectWithValue, _getState }) => {
    return products.map((product) => {
      return { ...product, quantity: 0 };
    });
  }
);
const fetchVouchers = createAsyncThunk(
  "vouchers/fetch",
  async (_, { rejectWithValue, getState }) => {
    return true;
  }
);

const operations = {
  fetchProducts,
  fetchVouchers,
};

export default operations;
