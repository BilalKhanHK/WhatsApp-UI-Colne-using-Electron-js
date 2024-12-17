import { createSlice } from "@reduxjs/toolkit";

const OpenCloseDrawar = createSlice({
  name: "open",
  initialState: false,
  reducers: {
    setOpen(state, action) {
      return !state;
    },
  },
});

export const { setOpen } = OpenCloseDrawar.actions;
export default OpenCloseDrawar.reducer;
