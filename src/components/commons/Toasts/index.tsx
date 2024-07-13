"use client";
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {hideToast} from "@/store/features/toast";

type ToastType = "success" | "error"

export const ToastsContainer: React.FC = () => {
    const toast = useAppSelector(state => state.toast);

    return (
        <>
        <div className={"fixed z-50 bottom-0 right-0 w-96 py-4 px-4"}>
            {toast.show && <Toasts message={toast.message} type={toast.type as ToastType}/>}
        </div>
        </>
    );
}

type ToastProps = {
    message: string,
    type: ToastType
}

export const Toasts: React.FC<ToastProps> = () => {
    const toast = useAppSelector(state => state.toast);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(hideToast());
        }, 3000);
    }, []);

    return (
        <>
            <div className={`p-4 ${toast.type === "success" ? "bg-emerald-500" : "bg-red-500"} h-fit text-white shadow-2xl flex items-center`}>
                <span>{toast.message}</span>
            </div>

        </>
    );
}