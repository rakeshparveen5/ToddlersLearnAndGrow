import { createSlice } from "@reduxjs/toolkit";

export type ColorType = "Red" | "Blue" | "Green" | "Yellow" | "Purple" | "Orange" | "Pink" | "Brown" | "Black" | "White" ;

const colors: ColorType[] = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Pink", "Brown", "Black", "White"];

interface ColorState {
  targetColor: ColorType;
  score: number;
}

const initialState: ColorState = {
  targetColor: colors[Math.floor(Math.random() * colors.length)],
  score: 0,
};

const colorGameSlice = createSlice({
  name: "colorGame",
  initialState,
  reducers: {
    correctAnswer: (state) => {
      state.score += 1;
      state.targetColor = colors[Math.floor(Math.random() * colors.length)];
    },
    wrongAnswer: (state) => {
      return state;
    },
  },
});

export const { correctAnswer, wrongAnswer } = colorGameSlice.actions;
export default colorGameSlice.reducer;