import React from "react";
import Image from "next/image";
import {Button} from "@/components/commons/Button";

export const Hero : React.FC = () => {
    return (<>
        <div className={"relative w-full min-h-screen flex items-center justify-center"}>
            <Image src={'/hero.png'} alt={'hero'} fill className="object-cover -z-20"/>
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-60 rounded-lg -z-10"></div>
            <div className={"flex flex-col gap-3 text-white ml-80 mt-16"}>
                <span className={"text-6xl font-extrabold"}>LOREM IPSUM</span>
                <span className={"text-6xl font-extrabold bg-white text-[#170b01] pl-2 pr-6 py-1"}>LOREM IPSUM DOLOR</span>
                <span className={"text-6xl font-extrabold"}>LOREM IPSUM</span>

                <Button className={"text-base mt-16"}>WHAT IS NEXT</Button>
            </div>
        </div>
    </>);
}