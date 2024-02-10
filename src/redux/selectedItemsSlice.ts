import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedItemsState {
  items: string[];
}

const initialState: SelectedItemsState = {
  items: [],
};

const selectedItemsSlice = createSlice({
  name: "selectedItems",
  initialState,
  reducers: {
    selectItem: (state, action: PayloadAction<{ item: string }>) => {
      const { item } = action.payload;
      !state.items.includes(item)
        ? state.items.push(item)
        : state.items.splice(state.items.indexOf(item), 1);
    },
    unSelectAll: (state) => {
      state.items = [];
    },
    selectAll: (state, action: PayloadAction<{ item: string }>) => {
      if (!state.items.includes(action.payload.item)) {
        state.items.push(action.payload.item);
      }
    },
  },
});

export const { selectItem, unSelectAll, selectAll } =
  selectedItemsSlice.actions;

export default selectedItemsSlice.reducer;
