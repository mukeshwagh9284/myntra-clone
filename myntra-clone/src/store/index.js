import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fetchstetusSlice from "./fetchstetusSlice";
import bagSlice from "./bagSlice";

const myntrastore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchStetus: fetchstetusSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export default myntrastore;
