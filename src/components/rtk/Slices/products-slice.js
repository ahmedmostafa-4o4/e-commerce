import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../axiosInstance";

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ filterData, categoryId }, { rejectWithValue }) => {
    try {
      let response;
      if (Object.keys(filterData).some((key) => filterData[key])) {
        // If filters are provided, send a request with them
        response = await axiosInstance.get("products-filter", {
          params: {
            price: filterData.price,
            size: filterData.size,
            rating: filterData.rating,
            color: filterData.color,
            stock: filterData.stock,
            newArrival: filterData.newArrival,
          },
        });
      } else {
        // If no filters, fetch all products
        if (categoryId) {
          response = await axiosInstance.get(`/categories/${categoryId}`);
        } else {
          response = await axiosInstance.get("/products");
        }
      }

      return response.data.products; // Return the array of products directly
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch products"
      );
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload; // Assuming action.payload is the array of products
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch products";
      });
  },
});

export default productsSlice.reducer;
