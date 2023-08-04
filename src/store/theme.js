import { createSlice } from "@reduxjs/toolkit";

export const theme = createSlice({
    name: "theme",
    initialState: {
        simpleNavbar: false,
        adminNavbar: false,
        superNavbar: false
    },
    reducers: {
        toggleSimpleNavbar: (state) => {
            state.simpleNavbar = !state.simpleNavbar
        },
        toggleAdminNavbar: (state) => {
            state.adminNavbar = !state.adminNavbar
        },
        toggleSuperNavbar: (state) => {
            state.superNavbar = !state.superNavbar
        }
    }
})

export const { toggleSimpleNavbar, toggleAdminNavbar, toggleSuperNavbar } = theme.actions
export default theme.reducer