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

const trackAddSlice = createSlice({
  name: "trackAdd",
  initialState: {
    track_name: null,
    track_description: null,
    track_genre: null,
    album: null,
    track_file: null,
  },
  reducers: {
    settrack_name(state, action) {
      state.aritistId = action.payload;
    },
    settrack_description(state, action) {
      state.genre = action.payload;
    },
    settrack_genre(state, action) {
      state.cover = action.payload;
    },
    setalbum(state, action) {
      state.desc = action.payload;
    },
    settrack_file(state, action) {
      state.albumName = action.payload;
    },
  },
});
export const trackAddSliceActions = trackAddSlice.actions;

export const TrackAddSlice = trackAddSlice;
