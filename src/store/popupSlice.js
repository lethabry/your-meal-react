import { createSlice } from '@reduxjs/toolkit';

const popupSlice = createSlice({
  name: 'popup',
  initialState: {
    infoPopup: {
      isInfoPopupOpen: false,
      content: {},
    },
    deliveryPopup: {
      isDeliveryPopupOpen: false,
    },
  },
  reducers: {
    openInfoPopup(state) {
      state.infoPopup.isInfoPopupOpen = !state.infoPopup.isInfoPopupOpen;
    },
    closePopups(state) {
      state.infoPopup.isInfoPopupOpen = false;
      state.deliveryPopup.isDeliveryPopupOpen = false;
    },
    openDeliveryPopup(state) {
      state.deliveryPopup.isDeliveryPopupOpen = !state.deliveryPopup.isDeliveryPopupOpen;
    },
    getInfoPopupContent(state, action) {
      state.infoPopup.content = action.payload;
    },
  },
});

export const { openInfoPopup, closePopups, openDeliveryPopup, getInfoPopupContent } =
  popupSlice.actions;
export default popupSlice.reducer;
