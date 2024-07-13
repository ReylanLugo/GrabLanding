import {createSlice} from "@reduxjs/toolkit";

export const carrouselSlice = createSlice({
    name: "carrousel",
    initialState: {
        current: 0,
        items: [
            "/carrousel1.png",
            "/carrousel2.png",
            "/carrousel3.png",
            "/carrousel3.png",
            "/carrousel3.png",
        ]
    },
    reducers: {
        next: (state) => {
            state.current = state.current + 1;
        },
        prev: (state) => {
            state.current = state.current - 1;
        },
        setCurrent: (state, action) => {
            state.current = action.payload;
        }
    },
});

export const {next, prev, setCurrent} = carrouselSlice.actions;
export default carrouselSlice.reducer