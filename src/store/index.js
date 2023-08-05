import { configureStore } from "@reduxjs/toolkit";
import theme from "./theme";
import simpleUsers from "./simple-users";
import personnels from "./personnels";

export default configureStore({
    reducer: {
        theme: theme,
        simpleUsers: simpleUsers,
        personnels: personnels
    }
})