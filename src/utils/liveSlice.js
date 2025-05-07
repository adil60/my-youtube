import { createSlice } from "@reduxjs/toolkit";

const liveSlice = createSlice({
    name: 'live',
    initialState: {
        chats: []
    },
    reducers: {
        addLiveChat(state, actions) {
            state.chats.splice(50, 1);
            state.chats.unshift(actions.payload);
            // arrays.unshift is opposite from arrays.push
            // arrays.push() adds element at the last index
            // unshift() adds at first element at 0th index and shifts the elements to +1th index
        }
    }
})

export const { addLiveChat } = liveSlice.actions;

export default liveSlice.reducer;