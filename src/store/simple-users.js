import { createSlice } from "@reduxjs/toolkit";

export const simpleUsers = createSlice({
    name: "simpleUsers",
    initialState: {
        simpleUsers: localStorage.getItem("SIMPLE_USERS") || []
    },
    reducers: {
        upSimpleUsers: (state, action) => {
            state.simpleUsers = action.payload
            localStorage.setItem("SIMPLE_USERS", state.simpleUsers)
        }
    }
})

export const { upSimpleUsers } = simpleUsers.actions
export default simpleUsers.reducer