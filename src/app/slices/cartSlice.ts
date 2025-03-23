import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// interface ICartData {
//   id: string;
//   title: string;
//   imageUrl: string;
//   dateAdded: string;
// }

export interface ICartSlice {
  items: string[];
  addedItems: string[];
}

const initialState: ICartSlice = {
  items: ['apple', 'orange', 'banana'],
  addedItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
      state.addedItems = [
        ...state.addedItems,
        action.payload
      ];
    },
    removeToCart: (state, action: PayloadAction<string>) => {
      const filteredItems = [...state.addedItems].filter((item) => item !== action.payload);
      state.addedItems = filteredItems;
    },
    clearAll: (state) => {
      state.addedItems = [];
    },
  },
});

export const { addToCart, removeToCart, clearAll } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;