import React from "react";
import Image from "next/image";

export const Live: React.FC = () => {
    return (<>
    <div className={"bg-primary w-full flex justify-center items-center text-white gap-4 absolute z-10"}>
        <span className={"text-white font-extrabold flex gap-2 items-center text-base uppercase px-2 py-1 bg-red-600"}>
            LIVE
            <Image className={"invert brightness-0"} src={'/Icons/livestream.svg'} alt={'Live Icon'} width={25} height={25} />
        </span>
        <span>Lorem Ipsum dolor sit amet</span>
        <div className={"px-5 py-2 bg-[#07913b] h-full flex gap-3 items-center"}>
            JOIN NOW!
            <Image src={'/Icons/play.png'} className={"invert brightness-0"} alt={'Play Icon'} width={20} height={20} />
        </div>
    </div>
    </>);
}