import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../axiosInstance";

export const registeredUser = createAsyncThunk(
  "user/registeredUser",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("register", data); // Send the POST request

      // Check if the response contains a token
      if (res.data.token) {
        const token = res.data.token; // Get the token from the response
        window.localStorage.setItem("_token", token); // Store the token in local storage

        console.log("Registration successful:", res.data); // Log response for debugging


        // Return the user data and token
        return {
          status: res.status,
          user: res.data.user, // Assuming user data is also returned
          token,
        };
      } else {
        console.error("Token not received:", res.data);
        return rejectWithValue("Token not received");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      return rejectWithValue(error.response?.data || "Registration failed");
    }
  }
);
export const getAuthUser = createAsyncThunk(
  "user/getAuthUser",
  async (_, { rejectWithValue }) => {
    try {
      if (window.localStorage.getItem("_token")) {
        const res = await axiosInstance.get("user"); // Send the GET request for user data
        return res.data; // Return the user data directly
      }

      return null;
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      return rejectWithValue(
        error.response?.data || "Failed to fetch user data"
      );
    }
  }
);

export const logout = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("logout", null);

      console.log(response.data.message); // Handle the response
      // Optionally clear the token from local storage
      window.localStorage.removeItem("_token");
      // Redirect to login or perform other actions
    } catch (error) {
      console.error("Logout failed:", error);
      return rejectWithValue(error.response?.data || "Failed to Logout");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    status: null,
    data: null, // You can change this to null to indicate no user data
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registeredUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registeredUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // This now holds the user and token
        state.status = action.payload.status;
      })
      .addCase(registeredUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Use the error returned from rejectWithValue
        state.status = action.payload.status;
      })
      .addCase(getAuthUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAuthUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // Update user data with fetched data
      })
      .addCase(getAuthUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Handle error from fetching user data
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.data = null; // Update user data with fetched data
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Handle error from fetching user data
      });
  },
});

export default userSlice.reducer;
