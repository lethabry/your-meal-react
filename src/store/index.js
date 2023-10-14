import { configureStore } from '@reduxjs/toolkit';
import popupReducer from './popupSlice';
import productsReducer from './poductsSlice';

export default configureStore({
  reducer: {
    popup: popupReducer,
    products: productsReducer,
  },
});
