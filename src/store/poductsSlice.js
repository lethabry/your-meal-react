import { createSlice } from '@reduxjs/toolkit';
import { productsList } from '../utils/products';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [...productsList],
  },
  reducers: {
    filterProducts(state, action) {
      state.products = productsList.filter((product) => product.filter === action.payload);
    },
  },
});

export const { filterProducts } = productsSlice.actions;
export default productsSlice.reducer;
