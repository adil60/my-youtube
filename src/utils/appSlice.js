import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'appSlice',
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        toggleMenuButton(state) {
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu(state) {
            state.isMenuOpen = false;
        }
    }
})

export const { toggleMenuButton, closeMenu } = appSlice.actions

export default appSlice.reducer;