import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../axiosInstance";

// Async Thunks for Database Operations

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, { rejectWithValue }) => {
    try {
      let response;
      response = await axiosInstance.get("/cart");
      console.log(response);
      return response.data; // Return the array of products directly
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch products"
      );
    }
  }
);

export const addToCartDB = createAsyncThunk(
  "cart/addToCartDB",
  async (item, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/cart", {
        ...item,
        product_id: item.id,
        product: item,
      });
      return response.data; // Assuming API returns the added item
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to add to cart");
    }
  }
);

export const deleteFromCartDB = createAsyncThunk(
  "cart/deleteFromCartDB",
  async ({ id, color, size }, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/cart/${id}/${color}/${size}`);
      return { id, color, size }; // Return the ID of the deleted item
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to delete from cart"
      );
    }
  }
);

export const clearCartDB = createAsyncThunk(
  "cart/clearCartDB",
  async (_, { rejectWithValue }) => {
    try {
      await axiosInstance.delete("/cart");
      return []; // Return an empty array to clear the cart
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to clear cart");
    }
  }
);

export const updateQuantityDB = createAsyncThunk(
  "cart/updateQuantityDB",
  async ({ id, quantity }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/cart/${id}`, { quantity });
      return { id, quantity: response.data.quantity }; // Return updated item data
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to update quantity"
      );
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: JSON.parse(window.localStorage.getItem("cart")) || [],
    loading: false,
    error: null,
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      window.localStorage.setItem("cart", JSON.stringify(state.items));
    },
    deleteFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) =>
          !(
            item.id === action.payload.id &&
            item.color === action.payload.color &&
            item.size === action.payload.size
          )
      );
      window.localStorage.setItem("cart", JSON.stringify(state.items));
    },
    clear: (state) => {
      state.items = [];
      window.localStorage.removeItem("cart");
    },
    updateQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        window.localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch cart";
      })
      .addCase(addToCartDB.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteFromCartDB.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) =>
            !(
              item.id === action.payload.id &&
              item.color === action.payload.color &&
              item.size === action.payload.size
            )
        );
      })
      .addCase(clearCartDB.fulfilled, (state) => {
        state.items = [];
      })
      .addCase(updateQuantityDB.fulfilled, (state, action) => {
        const item = state.items.find((item) => item.id === action.payload.id);
        if (item) {
          item.quantity = action.payload.quantity;
        }
      })
      .addMatcher(
        (action) => action.type.endsWith("rejected"),
        (state, action) => {
          state.error = action.payload || "An error occurred";
        }
      );
  },
});

export const { addToCart, deleteFromCart, clear, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
