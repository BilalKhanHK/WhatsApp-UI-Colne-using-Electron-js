import { configureStore } from "@reduxjs/toolkit";
import RouteSlice from "./Slices/RouteSlice";
import OpenCloseDrawar from "./Slices/OpenCloseDrawar";

const store = configureStore({
  reducer: {
    currentPage: RouteSlice,
    open: OpenCloseDrawar,
  },
});

export default store;
