import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getNavigationLinks } from '../utils/api';

export const fetchLinks = createAsyncThunk('link/getLinks', async () => await getNavigationLinks());

const LinkSlice = createSlice({
  name: 'link',
  initialState: {
    links: [],
  },
  reducers: {
    setActive(state, action) {
      state.links = state.links.map((link) => {
        if (link.name === action.payload) {
          link.selected = true;
        } else {
          link.selected = false;
        }
        return link;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLinks.fulfilled, (state, action) => {
      state.links = action.payload;
    });
  },
});

export const { setActive } = LinkSlice.actions;
export default LinkSlice.reducer;
