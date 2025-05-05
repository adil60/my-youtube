import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";


const store = configureStore( {
    reducer : {
        menu : appSlice,
        search : searchSlice
    }
});

export default store;