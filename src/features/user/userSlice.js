import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  email: "",
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    insertUserName(state, action) {
      state.userName = action.payload;
    },
    insertEmail(state, action) {
      state.email = action.payload;
    },

    updateAuthnticate(state, action) {
      state.isAuthenticated = action.payload;
    },
    clearUserState(state) {
      state.email = "";
      state.userName = "";
      state.isAuthenticated = false;
    },
  },
});

export const {
  insertUserName,
  updateAuthnticate,
  insertEmail,
  clearUserState,
} = userSlice.actions;

export default userSlice.reducer;
