import { createSlice } from "@reduxjs/toolkit";

export const ApiDataReducer = createSlice({
    name: "Data",
    initialState: {
        value: "Loading"
    },
    reducers: {
        result: (state, data) => {
            state.value = data.payload;
        }
    }
});

export const selectData = (state) => state.Data.value;

export const { result } = ApiDataReducer.actions;

export default ApiDataReducer.reducer;
