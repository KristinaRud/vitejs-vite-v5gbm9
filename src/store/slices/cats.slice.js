import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCatsForSearch,
  fetchCats,
  // addCat,
  // updateCat,
} from "../actionCreator/cats.actionCreator";

const catsSlice = createSlice({
  name: "cats",
  initialState: {
    cats: [],
    catsForSearch: [],
    isSearchLoading: false,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCats.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCats.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cats = action.payload;
    });
    builder.addCase(fetchCats.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchCatsForSearch.fulfilled, (state, action) => {
      state.isSearchLoading = false;
      state.catsForSearch = action.payload;
    });
    builder.addCase(fetchCatsForSearch.pending, (state) => {
      state.isSearchLoading = true;
    });
    // builder.addCase(addCat.fulfilled, (state, action) => {
    //   state.cats.push(action.payload);
    //   state.isLoading = false;
    //   state.error = null;
    // });
    // builder.addCase(addCat.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(addCat.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.error.message;
    // });
    // builder.addCase(updateCat.fulfilled, (state, action) => {
    //   state.cats = state.cats.cats.map((product) =>
    //     product._id === action.payload._id ? action.payload : product,
    //   );
    //   state.isLoading = false;
    //   state.error = null;
    // });
    // builder.addCase(updateCat.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(updateCat.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.error.message;
    // });
  },
});

export default catsSlice.reducer;