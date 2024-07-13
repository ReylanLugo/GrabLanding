import {createSlice} from "@reduxjs/toolkit";

export const contactFormSlice = createSlice({
    name: "contactForm",
    initialState: {
        name: "",
        surname: "",
        phone: "",
        email: "",
        department: "",
        message: "",
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setSurname: (state, action) => {
            state.surname = action.payload;
        },
        setPhone: (state, action) => {
            state.phone = action.payload;
        },
        setDepartment: (state, action) => {
            state.department = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setMessage: (state, action) => {
            state.message = action.payload;
        },
    },
});

export const {
    setName, setEmail,
    setMessage, setPhone,
    setDepartment, setSurname
} = contactFormSlice.actions;
export default contactFormSlice.reducer;