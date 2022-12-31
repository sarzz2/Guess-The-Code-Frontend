import { createSlice } from "@reduxjs/toolkit";

export const DisableButtonReducer = createSlice({
    name: "setButtonState",
    initialState: {
        value: false
    },
    reducers: {
        DisableTrue: (state) => {
            state.value = true;
        },
        DisableFalse: (state) => {
            state.value = false;
        }
    }
});
export const selectDisableButtonState = (state) => state.setButtonState.value;

export const { DisableFalse, DisableTrue } = DisableButtonReducer.actions;

export default DisableButtonReducer.reducer;
