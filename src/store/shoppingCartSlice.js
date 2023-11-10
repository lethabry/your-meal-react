import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getShoppingCart,
  addProductToShoppingCart,
  changeProductAmountInShoppingCart,
  deleteProductFromShoppingCart,
} from '../utils/api';

export const getShoppingCartFetch = createAsyncThunk(
  'shoppingCart/getShoppingCart',
  async () => await getShoppingCart()
);

export const addProductFetch = createAsyncThunk(
  'shoppingCart/addProduct',
  async (product) => await addProductToShoppingCart(product)
);

export const deleteProductFetch = createAsyncThunk(
  'shoppingCart/deleteProduct',
  async (productId, { dispatch }) => {
    await deleteProductFromShoppingCart(productId);
    dispatch(deleteProduct(productId));
  }
);

export const changeAmountFetch = createAsyncThunk('shoppingCart/changeAmount', async (data) => {
  const { productId, amount } = data;
  const response = await changeProductAmountInShoppingCart(productId, amount);
  return response;
});

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: {
    shoppingCart: [],
    summaryAmount: 0,
    summaryPrice: 0,
  },
  reducers: {
    deleteProduct(state, action) {
      state.shoppingCart = state.shoppingCart.filter((item) => item._id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getShoppingCartFetch.fulfilled, (state, action) => {
        const data = action.payload;
        state.shoppingCart = action.payload;
        state.summaryAmount = data
          .map((item) => item.amount)
          .reduce((current, next) => current + next, 0);
        state.summaryPrice = data
          .map((item) => item.price * item.amount)
          .reduce((current, next) => current + next, 0);
      })
      .addCase(addProductFetch.fulfilled, (state, action) => {
        state.shoppingCart.push(action.payload);
      })
      .addCase(changeAmountFetch.fulfilled, (state, action) => {
        state.shoppingCart.map((item) => {
          if (item._id === action.payload._id) {
            item.amount = action.payload.amount;
            return item;
          }
        });
      });
  },
});
export const { deleteProduct } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
