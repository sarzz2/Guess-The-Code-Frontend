import { createSlice } from "@reduxjs/toolkit";

export const SetTimerSocketReducer = createSlice({
    name: "Timer",
    initialState: {
        value: 10
    },
    reducers: {
        Timer: (state, data) => {
            state.value = data.payload;
        }
    }
});

export const selectTimer = (state) => state.timer.value;

export const { Timer } = SetTimerSocketReducer.actions;

export default SetTimerSocketReducer.reducer;
