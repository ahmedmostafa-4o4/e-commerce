import { createSlice } from "@reduxjs/toolkit";

export const favSlice = createSlice({
  name: "fav",
  initialState: JSON.parse(window.localStorage.getItem("fav")) || [],
  reducers: {
    addToFav: (state, action) => {
      state.push(action.payload);
      window.localStorage.setItem("fav", JSON.stringify(state));
    },
    deleteFromFav: (state, action) => {
      const updatedState = state.filter((item) => item.id !== action.payload);
      window.localStorage.setItem("fav", JSON.stringify(updatedState));
      return updatedState;
    },
    clear: (state) => {
      window.localStorage.removeItem("fav"); // Clear from Local Storage
      return [];
    },
  },
});

export const { addToFav, deleteFromFav, clear } = favSlice.actions;
export default favSlice.reducer;
