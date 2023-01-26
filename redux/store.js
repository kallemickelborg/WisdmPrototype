import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./reducers/userSlice";
import colorReducer from "./reducers/colorSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    color: colorReducer,
  },
});
