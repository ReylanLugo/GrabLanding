import React from "react";

type ButtonProps = {
    children: React.ReactNode,
    type?: "primary" | "secondary",
    className?: string
}

export const Button: React.FC<ButtonProps> = ({children, className, type = "primary"}) => {

    const ButtonStyles = {
        primary: "inline-block px-6 py-2.5 bg-[#07913b] text-white font-extrabold rounded w-fit",
        secondary: "inline-block px-6 py-2.5 bg-[#170b01] text-white font-extrabold rounded w-fit"
    }

    return (
        <>
            <button className={`${ButtonStyles[type]} ${className}`}>
                {children}
            </button>
        </>
    );
}