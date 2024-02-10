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
      !state.items.includes(item)
        ? state.items.push(item)
        : state.items.splice(state.items.indexOf(item), 1);
    },
  },
});

export const { selectItem } = selectedItemsSlice.actions;

export default selectedItemsSlice.reducer;
