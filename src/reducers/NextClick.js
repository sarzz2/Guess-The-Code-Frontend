import { createSlice } from "@reduxjs/toolkit";

export const NextClickReducer = createSlice({
    name: "nextClick",
    initialState: {
        value: 0
    },
    reducers: {
        NextButtonState: (state) => {
            state.value += 1;
        }
    }
});

export const selectNextClickState = (state) => state.nextClick.value;

export const { NextButtonState } = NextClickReducer.actions;

export default NextClickReducer.reducer;
