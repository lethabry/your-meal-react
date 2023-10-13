import { createSlice } from '@reduxjs/toolkit';

const popupSlice = createSlice({
  name: 'popup',
  initialState: {
    isPopupOpen: false,
  },
  reducers: {
    openPopup(state, action) {
      console.log(state, action);
      state.isPopupOpen = !state.isPopupOpen;
    },
    closePopup(state, action) {
      state.isPopupOpen = false;
    },
  },
});

export const { openPopup, closePopup } = popupSlice.actions;
export default popupSlice.reducer;
