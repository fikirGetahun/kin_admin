import { createSlice } from "@reduxjs/toolkit";

const albumListSlice = createSlice({
  name: "albumList",
  initialState: { artistList: [], dataLoaded: false },
  reducers: {
    setArtist(state, action) {
      state.artistList = action.payload;
    },
    setDataLoaded(state) {
      state.dataLoaded = true;
    },
  },
});

export const albumListActions = albumListSlice.actions;
export default albumListSlice;
