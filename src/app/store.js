import { configureStore } from "@reduxjs/toolkit";
import urlListsReducer from "../features/fetchlists/urlListsSlice";

export const store = configureStore({
  reducer: {
    urlLists: urlListsReducer,
  },
});
