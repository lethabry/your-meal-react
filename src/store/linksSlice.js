import { createSlice } from '@reduxjs/toolkit';
import { links } from '../utils/linksArray';

const LinkSlice = createSlice({
  name: 'link',
  initialState: {
    links: links,
  },
  reducers: {
    setActive(state, action) {
      state.links = state.links.map((link) => {
        if (link.name === action.payload) {
          link.selected = !link.selected;
        } else {
          link.selected = false;
        }
        return link;
      });
    },
  },
});

export const { setActive } = LinkSlice.actions;
export default LinkSlice.reducer;
