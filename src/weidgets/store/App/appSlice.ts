import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {ActionApp, InitialStateApp} from "./types.ts";

const initialState = {
    user: {
        login: '',
        password: '',
        id: '',
        favorites:{},
        likes: {}
    }
}
const AppSlice = createSlice({
    name: "App",
    initialState,
    reducers:{
        getUser(state:InitialStateApp,action:PayloadAction<ActionApp>){
            state.user = action.payload
        },
        setUser(state:InitialStateApp, action:PayloadAction<ActionApp>){
            state.user = action.payload
        }
    }
})
export default AppSlice.reducer
export const {getUser,setUser} = AppSlice.actions