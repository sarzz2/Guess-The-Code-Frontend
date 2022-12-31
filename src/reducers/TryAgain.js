import { createSlice } from "@reduxjs/toolkit";

export const TryAgainReducer = createSlice({
    name: "tryAgain",
    initialState: {
        value: false
    },
    reducers: {
        TryAgainTrue: (state) => {
            state.value = true;
        },
        TryAgainFalse: (state) => {
            state.value = false;
        }
    }
});

export const selectTryAgainState = (state) => state.tryAgain.value;

export const { TryAgainTrue, TryAgainFalse } = TryAgainReducer.actions;

export default TryAgainReducer.reducer;
