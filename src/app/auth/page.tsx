"use client";
import React, {useEffect} from "react";
import {Button} from "@/components/commons/Button";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {setPasswordForm, setUsernameForm} from "@/store/features/auth";
import {Login, Register} from "@/actions";
import {Cookies} from "react-cookie";
import {setToast} from "@/store/features/toast";

export default function Page() {
    const cookies = new Cookies();
    const auth = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (cookies.get('token')) {
            window.location.href = "/admin";
        }
    }, []);

    async function handleLogin() {
        const credentials = {
            username: auth.usernameForm,
            password: auth.passwordForm
        }
        const response = await Login(credentials);
        if (response.success) {
            cookies.set('token', response.token, {path: '/'});
            window.location.href = "/admin";
        } else {
            console.log(response);
            dispatch(setToast({message: response.msg, success: false}));
        }
    }

    async function handleRegister() {
        if (!auth.usernameForm || !auth.passwordForm) {
            return;
        }

        if (auth.passwordForm.length < 6) {
            dispatch(setToast({message: "Password must be at least 6 characters", success: false}));
            return
        }

        if (auth.usernameForm.length < 3) {
            dispatch(setToast({message: "Username must be at least 3 characters", success: false}));
            return
        }

        const credentials = {
            username: auth.usernameForm,
            password: auth.passwordForm
        }
        const response = await Register(credentials);
        if (response.success) {
            cookies.set('token', response.token, {path: '/'});
            window.location.href = "/admin";
        } else {
            console.log(response);
            dispatch(setToast({message: response.msg, success: false}));
        }
    }

    return <div className={"w-full min-h-screen flex items-center justify-center"}>
        <div
            className={"w-96 h-full flex flex-col gap-6 border border-black p-12 bg-white text-center rounded-lg shadow-2xl"}>
            <h2 className={"font-extrabold text-xl"}>Login/Register</h2>
            <input value={auth.usernameForm} onChange={(e) => dispatch(setUsernameForm(e.target.value))}
                   className={"w-full bg-[#f5f6fa] p-4 rounded-lg"} type={"text"} placeholder={"Username"}/>
            <input value={auth.passwordForm} onChange={(e) => dispatch(setPasswordForm(e.target.value))}
                   className={"w-full bg-[#f5f6fa] p-4 rounded-lg"} type={"password"} placeholder={"Password"}/>
            <div className={"flex gap-4"}>
                <Button onClick={handleLogin} className={"w-full h-12"}>Login</Button>
                <Button onClick={handleRegister} type={"outline"} className={"w-full h-12"}>Register</Button>
            </div>
        </div>
    </div>;
}