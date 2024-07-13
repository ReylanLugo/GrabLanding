import React from "react";
import Image from "next/image";
import {Button} from "@/components/commons/Button";

export const CallToAction: React.FC = () => {
    return (<>
        <div className={"lg:grid lg:grid-cols-2 relative"}>
            <div className={"px-20 pt-28 pb-14 bg-primary flex flex-col gap-20 relative"}>
                <h3 className={"font-extrabold text-3xl md:text-6xl text-white md:w-9/12"}>
                    Lorem ipsum dolor sit amet, consetetur
                </h3>
                <div className={"flex flex-col gap-4"}>
                    <Button className={"md:w-[20em] [&]:py-5"} type={"tertiary"}>LOREM IPSUM DOLOR SIT</Button>
                    <Button className={"md:w-[20em] [&]:py-5"} type={"outline-white"}>LOREM IPSUM DOLOR SIT
                        AMET</Button>
                </div>
            </div>
            <div className={"pr-20 lg:flex flex-col justify-end bg-[#04c859] lg:relative hidden"}>
                <Image src={'/CEO.png'} alt={'CEO'} width={1000} height={600}/>
            </div>
        </div>
    </>);
}