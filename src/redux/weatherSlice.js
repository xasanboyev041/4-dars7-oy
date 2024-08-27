import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city) => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}`
    );
    return response.json();
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: null,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default weatherSlice.reducer;
