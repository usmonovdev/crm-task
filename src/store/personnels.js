import { createSlice } from "@reduxjs/toolkit";

export const personnels = createSlice({
    name: "personnels",
    initialState: {
        personnels: JSON.parse(localStorage.getItem("PERSONNEL")) || [],
    },
    reducers: {
        updatePersonnel: (state, action) => {
            state.personnels = action.payload
            localStorage.setItem("PERSONNEL", JSON.stringify(action.payload))
        }
    }
})

export const { updatePersonnel } = personnels.actions
export default personnels.reducer