import {createSlice} from "@reduxjs/toolkit";

//only for demo purpose
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 170);

export const countdownSlice = createSlice({
    name: "countdown",
    initialState: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        target: targetDate
    },
    reducers: {
        setCountdown: (state, action) => {
            state.days = action.payload.days;
            state.hours = action.payload.hours;
            state.minutes = action.payload.minutes;
            state.seconds = action.payload.seconds;
        },
    },
});

export const {setCountdown} = countdownSlice.actions;
export default countdownSlice.reducer