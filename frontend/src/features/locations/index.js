import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    location: ""
};

const locationsSlice = createSlice({
    name: "locations",
    initialState,
    reducers: {
        setLocation(state, action) {
            state.location = action.payload;
        }
    },
    extraReducers: {}
});

export const { setLocation } = locationsSlice.actions;
export default locationsSlice.reducer;