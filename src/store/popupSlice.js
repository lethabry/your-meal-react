import { createSlice } from '@reduxjs/toolkit';

const popupSlice = createSlice({
  name: 'popup',
  initialState: {
    isDeliveryPopupOpen: false,
    isInfoPopupOpen: false,
  },
  reducers: {
    openInfoPopup(state, action) {
      state.isInfoPopupOpen = !state.isInfoPopupOpen;
    },
    closePopups(state, action) {
      state.isInfoPopupOpen = false;
      state.isDeliveryPopupOpen = false;
    },
    openDeliveryPopup(state, action) {
      state.isDeliveryPopupOpen = !state.isDeliveryPopupOpen;
    },
  },
});

export const { openInfoPopup, closePopups, openDeliveryPopup } = popupSlice.actions;
export default popupSlice.reducer;
