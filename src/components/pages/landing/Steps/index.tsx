import React from "react";
import Image from "next/image";
import {Button} from "@/components/commons/Button";

export const Steps: React.FC = () => {
    return (<>
        <div className={"flex flex-col bg-[#f5f6fa] py-16 md:py-28 md:px-20 px-10 gap-12 items-center"}>
            <div className={"w-full flex flex-col items-center gap-7"}>
                <h4 className={"text-6xl font-extrabold"}>Lorem ipsum</h4>
                <p className={"lg:w-6/12 lg:text-center"}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua.
                </p>
            </div>
            <div className={"lg:grid lg:grid-cols-3 flex flex-col gap-6 w-full"}>
                <div className={"flex flex-col items-center"}>
                    <div className={"relative w-full h-72"}>
                        <Image src={'/step1.png'} alt={"step1"} fill className="object-cover"/>
                    </div>
                    <div className={"px-12 py-6 bg-primary text-white flex flex-col items-center w-full font-medium"}>
                        LOREM IPSUM
                    </div>
                </div>

                <div className={"flex flex-col items-center"}>
                    <div className={"relative w-full h-72"}>
                        <Image src={'/step2.png'} alt={"step1"} fill className="object-cover"/>
                    </div>
                    <div className={"px-12 py-6 bg-primary text-white flex flex-col items-center w-full font-medium"}>
                        LOREM IPSUM
                    </div>
                </div>


                <div className={"flex flex-col items-center"}>
                    <div className={"relative w-full h-72"}>
                        <Image src={'/step3.png'} alt={"step1"} fill className="object-cover"/>
                    </div>
                    <div className={"px-12 py-6 bg-primary text-white flex flex-col items-center w-full font-medium"}>
                        LOREM IPSUM
                    </div>
                </div>
            </div>

            <Button type={"outline"}>LEARN MORE</Button>
        </div>
    </>);
}