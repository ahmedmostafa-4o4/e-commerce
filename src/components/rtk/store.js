import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./Slices/products-slice";
import userSlice from "./Slices/user-slice";
import cartSlice from "./Slices/cart-slice";
import favSlice from "./Slices/fav-slice";

export const store = configureStore(
  {
    reducer: {
      products: productsSlice,
      cart: cartSlice,
      fav: favSlice,
      user: userSlice,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
