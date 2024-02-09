import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const selectedItemsSlice = createSlice({
  name: "selectedItems",
  initialState,
  reducers: {
    selectItem: (state, action) => {
      const { item } = action.payload;
      let arr = [...state.items];
      let check = !arr.includes(item);
      if (check) {
        state.items = [...state.items, item];
      } else {
        state.items = state.items.filter((elem) => elem != item);
      }
    },
  },
});

export const { selectItem } = selectedItemsSlice.actions;

export default selectedItemsSlice.reducer;
