import { configureStore } from "@reduxjs/toolkit";
import albumListSlice from "./getData";
import albumSlice, { TrackAddSlice } from "./postData";

const store = configureStore({
  reducer: {
    albumAdd: albumSlice.reducer,
    albumList: albumListSlice.reducer,
    trackAdd: TrackAddSlice.reducer,
  },
});

export default store;
