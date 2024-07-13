import {configureStore} from '@reduxjs/toolkit'
import countdownSlice from "@/store/features/countdown";
import carrouselSlice from "@/store/features/carrousel";
import contactFormSlice from "@/store/features/contactform";
import authSlice from "@/store/features/auth";
import adminSlice from "@/store/features/admin";
import toastSlice from "@/store/features/toast";

export const makeStore = () => {
    return configureStore({
        reducer: {
            countdown: countdownSlice,
            carrousel: carrouselSlice,
            contactForm: contactFormSlice,
            auth: authSlice,
            admin: adminSlice,
            toast: toastSlice
        },
    })
}


export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']