import { configureStore } from "@reduxjs/toolkit";
import albumListSlice from "./getData";
import albumSlice, { TrackAddSlicex } from "./postData";
import TrackAddSlice from "./postData";

const store = configureStore({
  reducer: {
    albumAdd: albumSlice.reducer,
    albumList: albumListSlice.reducer,
    trackAdd: TrackAddSlicex.reducer,
  },
});

export default store;
