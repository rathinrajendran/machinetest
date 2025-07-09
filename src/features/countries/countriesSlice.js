import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch countries
export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    const response = await axios.get(
      'https://restcountries.com/v2/all?fields=name,region,flag'
    );
    return response.data;
  }
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    status: 'idle',
    error: null,
    visibleCount: 6,
    filter: 'All',
  },
  reducers: {
    loadMore: (state) => {
      state.visibleCount += 6;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
      state.visibleCount = 6; // Reset when filter changes
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch countries';
      });
  },
});

export const { loadMore, setFilter } = countriesSlice.actions;
export default countriesSlice.reducer;
