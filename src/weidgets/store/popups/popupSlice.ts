import type {ActionPopup, InitialStatePopup} from "./types.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

const initialState:InitialStatePopup = {
    createRecordPopup: {
        name: 'createRecordPopup',
        status: false
    }
}

const popupSlice = createSlice({
    name: 'popupSlice',
    initialState,
    reducers:{
        ChangeStatus(state: InitialStatePopup,action: PayloadAction<ActionPopup>){
            state[action.payload.name].status = !state[action.payload.name].status
        }
    }
})
export const {ChangeStatus} = popupSlice.actions
export default popupSlice.reducer