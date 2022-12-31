import { createSlice } from "@reduxjs/toolkit";

export const TimerWebSocketReducer = createSlice({
    name: "TimerWebSocket",
    initialState: {
        value: 0
    },
    reducers: {
        Socket: (state, data) => {
            state.value = data.payload.func;
        }
    }
});

export const selectWebSocketTimer = (state) => state.timer.value;

export const { Socket } = TimerWebSocketReducer.actions;

export default TimerWebSocketReducer.reducer;
