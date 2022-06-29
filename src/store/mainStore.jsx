import { configureStore } from "@reduxjs/toolkit";
import albumListSlice, { TempDataSlice, trackListSlice } from "./getData";
import albumSlice, { TrackAddSlicex, ArtistAddSlicex } from "./postData";

const store = configureStore({
  reducer: {
    albumAdd: albumSlice.reducer,
    albumList: albumListSlice.reducer,
    trackAdd: TrackAddSlicex.reducer,
    artistAdd: ArtistAddSlicex.reducer,
    trackList: trackListSlice.reducer,
    tempData: TempDataSlice.reducer
  },
});

export default store;
