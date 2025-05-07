import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import liveSlice from "./liveSlice"


const store = configureStore( {
    reducer : {
        menu : appSlice,
        search : searchSlice,
        live : liveSlice
    }
});

export default store;