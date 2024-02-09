import { configureStore } from "@reduxjs/toolkit";
import selectedItemsSlice from "./selectedItemsSlice";

const store = configureStore({
  reducer: {
    selectedItemsSlice,
  },
  devTools: true, //process.env.NODE_ENV !== 'production',
});

export default store;
