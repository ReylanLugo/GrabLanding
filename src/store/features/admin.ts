import {createSlice} from "@reduxjs/toolkit";

export const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        users: [],
        userSelected: 0,
        page: 1,
        newPassword: '',
        newPasswordModal: false
    },
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
        },
        setUserSelected: (state, action) => {
            state.userSelected = action.payload
        },
        setPage: (state, action) => {
            state.page = action.payload
        },
        setNewPassword: (state, action) => {
            state.newPassword = action.payload
        },
        setNewPasswordModal: (state, action) => {
            state.newPasswordModal = action.payload
        }
    },
});

export const {setUsers, setPage, setUserSelected, setNewPassword, setNewPasswordModal} = adminSlice.actions;
export default adminSlice.reducer;