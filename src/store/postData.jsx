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
  name: "track",
  initialState: {
    track_name: null,
    track_description: null,
    track_genre: null,
    album: null,
    track_file: null,
  },
  reducers: {
    settrack_name(state, action) {
      state.track_name = action.payload;
    },
    settrack_description(state, action) {
      state.track_description = action.payload;
    },
    settrack_genre(state, action) {
      state.track_genre = action.payload;
    },
    setalbum(state, action) {
      state.album = action.payload;
    },
    settrack_file(state, action) {
      state.track_file = action.payload;
    },
  },
});
export const trackAddSliceActions = trackAddSlice.actions;

export const TrackAddSlicex = trackAddSlice;

const artistAddSlice = createSlice({
  name: "track",
  initialState: {
    artist_name: null,
    artist_avatar: null,
    artist_description: null,
  },
  reducers: {
    setartist_name(state, action) {
      state.artist_name = action.payload;
    },
    setartist_avatar(state, action) {
      state.artist_avatar = action.payload;
    },
    setartist_description(state, action) {
      state.artist_description = action.payload;
    },
  },
});
export const artistAddSliceActions = artistAddSlice.actions;

export const ArtistAddSlicex = trackAddSlice;
