import { createSlice } from "@reduxjs/toolkit";

import { colors } from "../../globalStyles";

export const colorSlice = createSlice({
  name: "color",
  initialState: {
    colorObject: colors,
  },
  reducers: {
    setColorObject: (state, action) => {
      state.colorObject = action.payload;
    },
  },
});

export const { setColorObject } = colorSlice.actions;
export const colorObject = (state) => state.color.colorObject;
export default colorSlice.reducer;
