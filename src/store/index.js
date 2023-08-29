import { configureStore } from "@reduxjs/toolkit";
import catsReducer from "./slices/cats.slice";

const store = configureStore({
  reducer: {
    cats: catsReducer,
  },
});

export default store;