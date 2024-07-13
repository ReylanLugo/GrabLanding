"use client";
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {setCountdown} from "@/store/features/countdown";

export const CountDown: React.FC = () => {

    const countdown = useAppSelector(state => state.countdown);
    const dispatch = useAppDispatch();

    useEffect(() => {

        const interval = setInterval(() => {
            const now = new Date();
            const distance = countdown.target.getTime() - now.getTime();

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval);
            } else {
                dispatch(setCountdown({days, hours, minutes, seconds}));
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    return <>
        <div
            className={"bg-dark-primary w-full flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-6 md:px-28 px-10 py-16"}>
            <span className={"text-white font-extrabold text-2xl lg:w-3/12 w-full"}>Lorem ipsum dolor sit amet, consectetur</span>
            <div className={"grid grid-cols-2 gap-6 md:grid-cols-4"}>
                <div className={"flex flex-col items-center md:border-r border-[#03b044] px-12"}>
                    <span className={"text-white font-extrabold text-6xl"}>{countdown.days}</span>
                    <span className={"text-[#03b044]"}>days</span>
                </div>

                <div className={"flex flex-col items-center md:border-r border-[#03b044] px-12"}>
                    <span className={"text-white font-extrabold text-6xl"}>{countdown.hours}</span>
                    <span className={"text-[#03b044]"}>hours</span>
                </div>

                <div className={"flex flex-col items-center md:border-r border-[#03b044] px-12"}>
                    <span className={"text-white font-extrabold text-6xl"}>{countdown.minutes}</span>
                    <span className={"text-[#03b044]"}>minutes</span>
                </div>

                <div className={"flex flex-col items-center"}>
                    <span className={"text-white font-extrabold text-6xl"}>{countdown.seconds}</span>
                    <span className={"text-[#03b044]"}>seconds</span>
                </div>
            </div>
        </div>
    </>
}