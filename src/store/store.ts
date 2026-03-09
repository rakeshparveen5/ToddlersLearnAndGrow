import { configureStore } from "@reduxjs/toolkit";
import colorGameReducer from "../features/colorGame/slice/colorGameSlice";

export const store = configureStore({
  reducer: {
    colorGame: colorGameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;