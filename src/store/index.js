import { configureStore } from "@reduxjs/toolkit";
import theme from "./theme";
import simpleUsers from "./simple-users";

export default configureStore({
    reducer: {
        theme: theme,
        simpleUsers: simpleUsers
    }
})