import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        usernameForm: "",
        passwordForm: "",
    },
    reducers: {
        setUsernameForm: (state, action) => {
            state.usernameForm = action.payload
        },
        setPasswordForm: (state, action) => {
            state.passwordForm = action.payload
        },
    }
})

export const {setUsernameForm, setPasswordForm} = authSlice.actions
export default authSlice.reducer;