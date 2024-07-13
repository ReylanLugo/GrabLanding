import {createSlice} from "@reduxjs/toolkit";

export const toastSlice = createSlice({
    name: "toast",
    initialState: {
        message: "",
        type: "success",
        show: false
    },
    reducers: {
        setToast: (state, action) => {
            state.message = action.payload.message;
            state.type = action.payload.type;
            state.show = true;
        },
        hideToast: (state) => {
            state.show = false;
        }
    },
});

export const {setToast, hideToast} = toastSlice.actions;
export default toastSlice.reducer;