import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./slices/navigationSlice";
import uiReducer from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    ui: uiReducer,
  },
});
