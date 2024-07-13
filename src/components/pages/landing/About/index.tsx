import React from "react";
import Image from "next/image";

export const About: React.FC = () => {
    return (<>
        <div className={"lg:grid flex flex-col items-end lg:grid-cols-2 py-28 md:px-20 px-8 gap-20"}>
            <div className={"flex flex-col gap-12"}>
            <span className={"font-extrabold  text-5xl md:text-7xl"}>
                Lorem ipsum dolor sit amet
            </span>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit</p>
            </div>
            <div className={"w-full relative md:h-96 h-64 lg:h-full"}>
                <Image src={'/aboutpic.png'} alt={'about'} fill className="object-cover"/>
            </div>
        </div>
    </>);
}