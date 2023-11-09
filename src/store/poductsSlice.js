import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProductByCategory } from '../utils/api';

export const fetchProducts = createAsyncThunk(
  'products/getProducts',
  async (categoryName) => await getProductByCategory(categoryName)
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const { filterProducts } = productsSlice.actions;
export default productsSlice.reducer;
