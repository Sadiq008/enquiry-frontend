import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLists = createAsyncThunk("fetchLists", async () => {
  const response = await fetch("http://localhost:3001/read");
  return response.json();
});

const initialState = {
  urlLists: { isLoading: false, data: null },
};

export const urlListsSlice = createSlice({
  name: "urlList",
  initialState,
  extraReducers: (builders) => {
    builders.addCase(fetchLists.pending, (state) => {
      state.isLoading = true;
    });
    builders.addCase(fetchLists.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builders.addCase(fetchLists.rejected, (state, action) => {
      console.log("Error ", action.payload);
      state.isError = true;
    });
  },
});

export default urlListsSlice.reducer;
