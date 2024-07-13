"use client";
import React from "react";

type ButtonProps = {
    children: React.ReactNode,
    type?: "primary" | "secondary" | "tertiary" | "outline" | "outline-white",
    className?: string,
    onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({children, className, onClick, type = "primary"}) => {

    const ButtonStyles = {
        primary: "inline-block px-6 py-2.5 bg-[#07913b] text-white font-extrabold rounded w-fit hover:bg-emerald-600 hover:text-white",
        secondary: "inline-block px-6 py-2.5 bg-[#170b01] text-white font-extrabold rounded w-fit hover:bg-[#07913b]",
        tertiary: "inline-block px-6 py-2.5 bg-white text-[#170b01] font-extrabold rounded w-fit hover:bg-[#170b01] hover:text-white",
        outline: "inline-block px-6 py-2.5 bg-transparent border-2 border-black text-black font-extrabold rounded w-fit hover:bg-black hover:text-white",
        "outline-white": "inline-block px-6 py-2.5 bg-transparent border border-white text-white font-extrabold rounded w-fit hover:bg-white hover:text-black"
    }

    return (
        <>
            <button onClick={() => onClick?.()} className={`${ButtonStyles[type]} ${className}`}>
                {children}
            </button>
        </>
    );
}