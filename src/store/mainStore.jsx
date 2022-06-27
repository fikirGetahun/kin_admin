import { configureStore } from "@reduxjs/toolkit";
import albumSlice from "./postData";

const store = configureStore({
  reducer: {
    albumAdd: albumSlice.reducer,
  },
});

export default store;
