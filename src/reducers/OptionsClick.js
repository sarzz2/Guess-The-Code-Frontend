import { createSlice } from "@reduxjs/toolkit";

export const ClickReducer = createSlice({
    name: "Click",
    initialState: {
        value: true
    },
    reducers: {
        changeButtonValue: (state, i) => {
            state.value = i.payload;
        },
        changeClickFalse: (state) => {
            state.value = false;
        }
    }
});

export const selectClickedState = (state) => state.Click.value;

export const { changeButtonValue, changeClickFalse } = ClickReducer.actions;

export default ClickReducer.reducer;
