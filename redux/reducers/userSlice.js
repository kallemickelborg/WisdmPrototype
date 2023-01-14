import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    authToken: "",
  },
  reducers: {
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
  },
});

export const { setAuthToken } = userSlice.actions;
export const authToken = (state) => state.user.authToken;
export default userSlice.reducer;
