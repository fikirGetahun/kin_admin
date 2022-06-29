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

const TrackListSlice = createSlice({
  name: "trackList",
  initialState: { TrackList: [], dataLoadedT: false },
  reducers: {
    setTrackList(state, action) {
      state.TrackList = action.payload;
    },
    setDataLoadedT(state) {
      state.dataLoadedT = true;
    },
  },
});

export const TrackListActions = TrackListSlice.actions;
export const trackListSlice = TrackListSlice;
