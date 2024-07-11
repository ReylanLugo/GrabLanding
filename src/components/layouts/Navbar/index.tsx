import React from "react";
import Image from "next/image";
import {Live} from "@/components/layouts/Navbar/Live";

export const Navbar: React.FC = () => {
    return (<>
        <Live/>
        <nav className={"px-20 py-4 flex justify-between absolute top-9 z-10 w-full"}>
            <Image src={'/grablogo.png'} alt={'Grabland Logo'} width={160} height={60} />

            <ul className={"flex gap-6 items-center font-extrabold text-white"}>
                <li>
                    <a href={'/'}>LOREM IPSUM</a>
                </li>
                <li>
                    <a href={'/'}>LOREM IPSUM</a>
                </li>
                <li>
                    <a href={'/'}>LOREM IPSUM</a>
                </li>
                <li>
                    <a href={'/'}>LOREM IPSUM</a>
                </li>
                <li>
                    <a href={'/'}>LOREM IPSUM</a>
                </li>
                <li>
                    <a href={'/'}>LOREM IPSUM</a>
                </li>
            </ul>
        </nav>
    </>);
}