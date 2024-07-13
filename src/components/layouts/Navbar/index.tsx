"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {Live} from "@/components/layouts/Navbar/Live";
import { usePathname } from 'next/navigation'
import Link from "next/link";

export const Navbar: React.FC = () => {

    const [open, setOpen] = useState(false);
    const pathname = usePathname()

    useEffect(() => {
        console.log(pathname)
    }, []);

    return (<>
        <Live/>
        <nav className={"md:px-20 px-7 py-4 flex justify-between absolute top-9 z-10 w-full items-center"}>
            <a href={'/'}><Image src={'/grablogo.png'} alt={'Grabland Logo'} className={"md:w-[160px] w-[90px] h-fit"} width={160}
                      height={60}/></a>
            <span onClick={() => setOpen(!open)} className={"cursor-pointer lg:hidden"}>
                <Image className={"invert"} src={'/Icons/menu.svg'} alt={"Menu Icon"} width={20} height={20}/>
            </span>
            <ul className={`lg:flex gap-6 ${pathname == "/" ? "lg:text-white" : "lg:text-black"} items-center font-extrabold ${open ? "flex flex-col gap-2 bg-white px-3 py-2 absolute top-14 right-2 rounded-lg text-black" : "hidden"}`}>
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
                    <Link href={'/auth'}>Login</Link>
                </li>
            </ul>
        </nav>
    </>);
}