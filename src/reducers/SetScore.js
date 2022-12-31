import { createSlice } from "@reduxjs/toolkit";

export const SetScoreReducer = createSlice({
    name: "setScore",
    initialState: {
        value: 0
    },
    reducers: {
        IncrementScore: (state) => {
            state.value += 1;
        },
        ResetScore: (state) => {
            state.value = 0;
        }
    }
});

export const selectSetScoreState = (state) => state.setScore.value;

export const { IncrementScore, ResetScore } = SetScoreReducer.actions;

export default SetScoreReducer.reducer;
