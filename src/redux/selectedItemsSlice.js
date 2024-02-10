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
    unSelectAll: (state) => {
      state.items = [];
    },
    selectAll: (state, action) => {
      console.log("selectAll", action);
      if (!state.items.includes(action.payload.item)) {
        state.items.push(action.payload.item);
      }
    },
  },
});

export const { selectItem, unSelectAll, selectAll } =
  selectedItemsSlice.actions;

export default selectedItemsSlice.reducer;
