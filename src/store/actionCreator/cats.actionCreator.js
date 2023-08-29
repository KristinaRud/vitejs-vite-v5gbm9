import { createAsyncThunk } from "@reduxjs/toolkit";
// import { debounce } from "lodash";
import { updatedQueryString } from "../../utils/queryParams/updatedQueryString";
import request from "../../utils/api/request";


const fetchCats = createAsyncThunk(
  "cats/fetchCats",
  async (queryStr) => {
    const parsedParams = updatedQueryString(queryStr);
    
    const { res, err } = await request({
      url: `/breeds${parsedParams}`,
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't get cats: ${err.data}`);
  },
);

const fetchCatsForSearch = createAsyncThunk(
  "products/fetchCatsForSearch",
  async (data) => {
    const { res, err } = await request({
      url: "/images/search",
      method: "POST",
      body: { query: data },
    });
    if (res) {
      return res;
    }
    throw new Error(`Couldn't get products: ${err.data}`);
  },
);

// const debouncedFetchCatsForSearch = debounce((data, dispatch) => {
//   dispatch(fetchCatsForSearch(data));
// }, 800);

// const debouncedSearch = (arg) => (dispatch) =>
//   debouncedFetchCatsForSearch(arg, dispatch);

// const addProduct = createAsyncThunk("products/addProduct", async (data) => {
//   const { res, err } = await request({
//     url: "/products",
//     method: "POST",
//     body: data,
//   });
//   if (res) {
//     return res;
//   }
//   throw new Error(`Couldn't add product: ${JSON.stringify(err.data)}`);
// });

// const updateProduct = createAsyncThunk(
//   "products/updateProduct",
//   async ({ id, data }) => {
//     const { res, err } = await request({
//       url: `/products/${id}`,
//       method: "PUT",
//       body: data,
//     });
//     if (res) {
//       return res;
//     }
//     throw new Error(`Couldn't update product: ${JSON.stringify(err.data)}`);
//   },
// );

export {
  fetchCats,
  fetchCatsForSearch,
//   debouncedSearch,
//   addProduct,
//   updateProduct,
};