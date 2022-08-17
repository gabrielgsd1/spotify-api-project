import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import * as qs from "qs";
import { SpotifyAPIResponse, Track } from "../types/apiTypes";

interface Statuses {
  status: "loading" | "idle" | "success" | "failed";
}

const initialState: SpotifyAPIResponse & Statuses = {
  albums: { items: [] },
  artists: { items: [] },
  tracks: { items: [] },
  status: "idle",
};

const resultsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(searchInAPI.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchInAPI.fulfilled, (state, action) => {
        if (action.payload.albums && state.albums)
          state.albums.items = action.payload.albums.items;
        if (action.payload.tracks && state.tracks)
          state.tracks.items = action.payload.tracks.items;
        if (action.payload.artists && state.artists)
          state.artists.items = action.payload.artists.items;
        state.status = "success";
      });
  },
});

async function requestToken() {
  const { data } = await axios("https://accounts.spotify.com/api/token", {
    headers: {
      Authorization: import.meta.env.VITE_SPOTIFY_KEY,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
    data: qs.stringify({
      grant_type: "client_credentials",
    }),
  });
  return data.access_token;
}

export const searchInAPI = createAsyncThunk(
  "results/searchdata",
  async (url: string) => {
    const token = await requestToken();
    const { data }: AxiosResponse<SpotifyAPIResponse> = await axios(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return data;
  }
);

export const getSingleTrack = async (id: string) => {
  const token = await requestToken();
  const { data }: AxiosResponse<Track> = await axios(
    `https://api.spotify.com/v1/tracks/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return data;
};

export default resultsSlice;

export const resultsReducer = resultsSlice.reducer;