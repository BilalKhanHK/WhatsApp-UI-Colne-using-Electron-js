import { createSlice } from "@reduxjs/toolkit";

const RouteSlice = createSlice({
  name: "currentPage",
  initialState: "General",
  reducers: {
    setCurrentPage(state, action) {
      return action.payload;
    },
  },
});

export const { setCurrentPage } = RouteSlice.actions;
export default RouteSlice.reducer;
