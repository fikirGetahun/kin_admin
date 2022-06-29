import { configureStore } from "@reduxjs/toolkit";
import albumListSlice, { trackListSlice } from "./getData";
import albumSlice, { TrackAddSlicex, ArtistAddSlicex } from "./postData";

const store = configureStore({
  reducer: {
    albumAdd: albumSlice.reducer,
    albumList: albumListSlice.reducer,
    trackAdd: TrackAddSlicex.reducer,
    artistAdd: ArtistAddSlicex.reducer,
    trackList: trackListSlice.reducer,
  },
});

export default store;
