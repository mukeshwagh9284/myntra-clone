import { createSlice } from "@reduxjs/toolkit";
const fetchstetusSlice = createSlice({
  name: "fetchStetus",
  initialState: {
    fetchDone: false,
    currentFetching: false,
  },
  reducers: {
    markFetchdone: (state) => {
      state.fetchDone = true;
    },
    markFetchingStart: (state) => {
      state.currentFetching = true;
    },
    markFetchingFinished: (state) => {
      state.currentFetching = false;
    },
  },
});

export const fetchStetusAcction = fetchstetusSlice.actions;
export default fetchstetusSlice;
