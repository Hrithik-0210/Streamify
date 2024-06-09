import { configureStore } from "@reduxjs/toolkit";
import menuBarSlice from "./menuBarSlice";

const store = configureStore({
  reducer: {
    menu: menuBarSlice,
  },
});

export default store;
