import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "searchSlice",
    initialState: {

    },
    reducers: {
        postCacheResults :(state, action) => {
            Object.assign(state, action.payload)
        }
    }
})

export const {postCacheResults} = searchSlice.actions;

export default searchSlice.reducer;