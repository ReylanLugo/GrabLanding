import React from "react";
import Image from "next/image";
import {Button} from "@/components/commons/Button";

export const Videos: React.FC = () => {
    return (<>
        <div className={"bg-[#f7f8fb] px-20 py-28 flex flex-col items-center gap-12"}>
            <h2 className={"font-extrabold text-5xl"}>
                Latest Videos
            </h2>
            <div className={"md:grid md:grid-cols-3 flex flex-col gap-6 w-full"}>
                <div className={"flex flex-col items-center"}>
                    <div className={"relative w-full h-fit"}>
                        <Image src={"/Icons/play.png"} alt={"play"} height={55} width={55}
                               className="z-10 absolute left-[43%] cursor-pointer top-[40%] invert"/>
                        <video src={'/videos/video1'} className="object-cover cursor-pointer"/>
                    </div>
                    <span className={"mt-4 text-lg"}>Lorem ipsum dolor sit amet, consetetur</span>
                </div>
                <div className={"flex flex-col items-center"}>
                    <div className={"relative w-full h-fit"}>
                        <Image src={"/Icons/play.png"} alt={"play"} height={55} width={55}
                               className="z-10 absolute left-[43%] cursor-pointer top-[40%] invert"/>
                        <video src={'/videos/video2.mp4'} className="object-cover cursor-pointer"/>
                    </div>
                    <span className={"mt-4 text-lg"}>Lorem ipsum dolor sit amet, consetetur</span>
                </div>
                <div className={"flex flex-col items-center"}>
                    <div className={"relative w-full h-fit"}>
                        <Image src={"/Icons/play.png"} alt={"play"} height={55} width={55}
                               className="z-10 absolute left-[43%] cursor-pointer top-[40%] invert"/>
                        <video src={'/videos/video3.mp4'} className="object-cover cursor-pointer"/>
                    </div>
                    <span className={"mt-4 text-lg"}>Lorem ipsum dolor sit amet, consetetur</span>
                </div>
                <div className={"flex flex-col items-center"}>
                    <div className={"relative w-full h-fit"}>
                        <Image src={"/Icons/play.png"} alt={"play"} height={55} width={55}
                               className="z-10 absolute left-[43%] cursor-pointer top-[40%] invert"/>
                        <video src={'/videos/video2.mp4'} className="object-cover cursor-pointer"/>
                    </div>
                    <span className={"mt-4 text-lg"}>Lorem ipsum dolor sit amet, consetetur</span>
                </div>
                <div className={"flex flex-col items-center"}>
                    <div className={"relative w-full h-fit"}>
                        <Image src={"/Icons/play.png"} alt={"play"} height={55} width={55}
                               className="z-10 absolute left-[43%] cursor-pointer top-[40%] invert"/>
                        <video src={'/videos/video3.mp4'} className="object-cover cursor-pointer"/>
                    </div>
                    <span className={"mt-4 text-lg"}>Lorem ipsum dolor sit amet, consetetur</span>
                </div>
                <div className={"flex flex-col items-center"}>
                    <div className={"relative w-full h-fit"}>
                        <Image src={"/Icons/play.png"} alt={"play"} height={55} width={55}
                               className="z-10 absolute left-[43%] cursor-pointer top-[40%] invert"/>
                        <video src={'/videos/video1'} className="object-cover cursor-pointer"/>
                    </div>
                    <span className={"mt-4 text-lg"}>Lorem ipsum dolor sit amet, consetetur</span>
                </div>
            </div>
            <Button className={"mt-3 [&]:px-16 [&]:py-4"}>VIEW ALL</Button>
        </div>
    </>);
}