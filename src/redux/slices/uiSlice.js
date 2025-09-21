import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavOpen: true,
  isNotificationsOpen: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleNav: (state) => {
      state.isNavOpen = !state.isNavOpen;
    },
    toggleNotifications: (state) => {
      state.isNotificationsOpen = !state.isNotificationsOpen;
    },
  },
});

export const { toggleNav, toggleNotifications } = uiSlice.actions;
export default uiSlice.reducer;
