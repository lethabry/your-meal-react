import { configureStore } from '@reduxjs/toolkit';
import popupReducer from './popupSlice';

export default configureStore({
  reducer: {
    popup: popupReducer,
  },
});
