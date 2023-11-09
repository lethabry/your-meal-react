import { configureStore } from '@reduxjs/toolkit';
import popupReducer from './popupSlice';
import productsReducer from './poductsSlice';
import linkReducer from './linksSlice';
import shoppingCartReducer from './shoppingCartSlice';

export default configureStore({
  reducer: {
    popup: popupReducer,
    products: productsReducer,
    links: linkReducer,
    shoppingCart: shoppingCartReducer,
  },
});
