import {configureStore} from "@reduxjs/toolkit";
import appSlice from "./App/appSlice.ts";
import popupSlice from "./popups/popupSlice.ts";

export const store = configureStore(
    {
        reducer: {
            appSlice,
            popupSlice
        }
    })
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>