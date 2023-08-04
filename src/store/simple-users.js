import { createSlice } from "@reduxjs/toolkit";

export const simpleUsers = createSlice({
    name: "simpleUsers",
    initialState: {
        simpleUsers: localStorage.getItem("SIMPLE_USERS") || [{
            name: "Usmonov Azizbek",
            id: 1,
            phone: "+998901114455",
            action: "uchrashuv"
        }]
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