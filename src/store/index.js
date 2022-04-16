import { configureStore } from "@reduxjs/toolkit";

import { productsSlice } from "./products";
import { cartSlice } from "./cart/index.js";

export default configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  },
});
