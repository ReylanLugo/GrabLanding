import React from "react";
import Image from "next/image";
import {Button} from "@/components/commons/Button";

export const MobileApp: React.FC = () => {
    return (<>
        <div className={"lg:grid lg:grid-cols-2 gap-32 relative px-7 md:px-20 pt-28 bg-[#f5f6fa] pb-40"}>
            <div className={"flex flex-col z-10 gap-6 relative"}>
                <h3 className={"font-extrabold text-6xl leading-snug w-9/12"}>Lorem ipsum dolor sit</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna alquyam erat, sed diam voluptua.
                </p>
                <Button className={"[&]:px-20 [&]:py-5"}>VIEW ALL</Button>
            </div>
            <div>
                <Image quality={100} src={'/mobile.png'} alt={"mobile"} fill={true}
                       className="object-cover w-9/12 absolute"/>
            </div>

        </div>
    </>);
}