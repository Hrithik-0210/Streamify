import { createSlice } from "@reduxjs/toolkit";

const menuBarSlice = createSlice({
  name: "menu",
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleMenu } = menuBarSlice.actions;
export default menuBarSlice.reducer;
