import { createSlice } from "@reduxjs/toolkit";

const albumSlice = createSlice({
  name: "album",
  initialState: {
    aritistId: null,
    genre: null,
    cover: null,
    albumName: null,
    desc: null,
  },
  reducers: {
    setArtistId(state, action) {
      state.aritistId = action.payload;
    },
    setGenre(state, action) {
      state.genre = action.payload;
    },
    setCover(state, action) {
      state.cover = action.payload;
    },
    setDesc(state, action) {
      state.desc = action.payload;
    },
    setAlbumName(state, action) {
      state.albumName = action.payload;
    },
  },
});

export const albumActions = albumSlice.actions;

export default albumSlice;
