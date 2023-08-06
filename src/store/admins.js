import { createSlice } from "@reduxjs/toolkit";

export const admins = createSlice({
    name: "admins",
    initialState: {
        admins: JSON.parse(localStorage.getItem("ADMIN")) || []
    },
    reducers: {
        updateAdmin: (state, action) => {
            state.admins = action.payload
            localStorage.setItem("ADMIN", JSON.stringify(action.payload))
        }
    }
})

export const { updateAdmin } = admins.actions
export default admins.reducer