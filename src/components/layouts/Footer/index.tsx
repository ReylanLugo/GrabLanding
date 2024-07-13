import React from "react";
import Image from "next/image";

export const Footer: React.FC = () => {
    return (<>
        <div
            className={"bg-[#f5f6fa] px-7 lg:px-20 py-10 flex md:flex-row flex-col gap-4 justify-center md:justify-between items-center"}>
            <span className={"w-[23em] text-xs font-bold leading-5"}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            </span>
            <Image src={'/grablogo.png'} className={"h-fit mr-7 md:mr-20"} alt={'Grabland'} width={200} height={100}/>
            <span className={"text-sm font-bold w-[12em]"}>
                All rights reserved to Lorem Ipsum© 2022
            </span>
        </div>
    </>);
}