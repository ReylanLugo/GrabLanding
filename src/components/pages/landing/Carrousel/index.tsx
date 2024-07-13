"use client";
import React, {useEffect, useRef} from "react";
import Image from "next/image";
import {Button} from "@/components/commons/Button";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {setCurrent} from "@/store/features/carrousel";

export const Carrousel: React.FC = () => {

    const carrousel = useAppSelector((state) => state.carrousel);
    const dispatch = useAppDispatch();
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(setCurrent((carrousel.current + 1) % carrousel.items.length));
        }, 2000);
        return () => clearInterval(interval);
    }, [carrousel.current, carrousel.items.length, dispatch]);

    useEffect(() => {
        const handleTransitionEnd = () => {
            if (carrousel.current === 0) {
                carouselRef.current && (carouselRef.current.style.transition = 'none');
                carouselRef.current && (carouselRef.current.style.transform = `translateX(${-carrousel.items.length * 20}em)`);
                setTimeout(() => {
                    carouselRef.current && (carouselRef.current.style.transition = 'transform 0.5s ease-in-out');
                }, 0);
            }
        };

        const carouselElement = carouselRef.current;
        carouselElement && carouselElement.addEventListener('transitionend', handleTransitionEnd);

        return () => {
            carouselElement?.removeEventListener('transitionend', handleTransitionEnd);
        };
    }, [carrousel.current, carrousel.items.length]);

    return (<>
        <div className={"bg-[#00563e] md:px-20 px-7 pt-28 pb-20 flex flex-col gap-10 items-center"}>
            <h4 className={"text-white text-4xl md:text-6xl font-extrabold mb-10"}> Lorem Ipsum dolor sit amet </h4>
            <div className={"w-full static overflow-hidden"}>
                <div ref={carouselRef} style={{transform: `translateX(${-carrousel.current * 20}em)`}}
                     className={"w-full  transition-transform duration-500 flex gap-4 h-[24em]"}>
                    {carrousel.items.map((item, index) => {
                        return <div key={index} className={"relative aspect-ratio-16/9 w-80 shrink-0"}>
                            <Image src={item} alt={'carrousel'} fill className="object-cover"/>
                        </div>;
                    })}
                    {carrousel.items.map((item, index) => (
                        <div key={index} className={"relative aspect-ratio-16/9 w-80 shrink-0"}>
                            <Image src={item} alt={'carrousel'} fill className="object-cover"/>
                        </div>
                    ))}
                </div>
            </div>
            <div className={"flex gap-6"}>
                {carrousel.items.map((item, index) => {
                    return <div key={index}
                                className={`cursor-pointer ${carrousel.current === index ? "bg-white p-2 rounded-full" : "border-2 border-white p-2 rounded-full"}`}
                                onClick={() => {
                                    dispatch(setCurrent(index));
                                }}/>
                })}
            </div>
            <Button type={"tertiary"} className={"[&]:px-16 [&]:py-4"}>VIEW ALL</Button>
        </div>
    </>);
}