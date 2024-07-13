"use client";
import React from "react";
import Image from "next/image";
import {Button} from "@/components/commons/Button";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {setDepartment, setEmail, setMessage, setName, setPhone, setSurname} from "@/store/features/contactform";

export const ContactUs: React.FC = () => {

    const contactForm = useAppSelector((state) => state.contactForm);
    const dispatch = useAppDispatch();

    return (<>
        <div className={"w-full relative lg:grid-cols-2 grid px-10 md:px-20 pt-28 pb-16"}>
            <Image src={'/contactus.png'} alt={'contactus'} fill className="object-cover"/>
            <div></div>
            <div className={"flex flex-col h-full gap-6 z-10 text-white w-full lg:pl-20"}>
                <h4 className={"font-extrabold text-5xl w-full"}>JOIN US.</h4>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                <form className={"w-full flex flex-col gap-6 text-black"}>
                    <div className={"grid grid-cols-2 gap-6"}>
                        <input onChange={(e) => dispatch(setName(e.target.value))} value={contactForm.name}
                               className={"w-full bg-[#f5f6fa] p-4 rounded-lg"} placeholder={"Name"}/>
                        <input onChange={(e) => dispatch(setSurname(e.target.value))} value={contactForm.surname}
                               className={"w-full bg-[#f5f6fa] p-4 rounded-lg"} placeholder={"Surname"}/>
                    </div>
                    <div className={"grid grid-cols-2 gap-6"}>
                        <input onChange={(e) => dispatch(setPhone(e.target.value))} value={contactForm.phone}
                               className={"w-full bg-[#f5f6fa] p-4 rounded-lg"} placeholder={"Phone"}/>
                        <input onChange={(e) => dispatch(setEmail(e.target.value))} value={contactForm.email}
                               className={"w-full bg-[#f5f6fa] p-4 rounded-lg"} placeholder={"Email"}/>
                    </div>
                    <input onChange={(e) => dispatch(setDepartment(e.target.value))} value={contactForm.department}
                           className={"w-full bg-[#f5f6fa] p-4 rounded-lg"} placeholder={"Department"}/>
                    <textarea onChange={(e) => dispatch(setMessage(e.target.value))} value={contactForm.message}
                              rows={5} className={"w-full bg-[#f5f6fa] p-4 rounded-lg"} placeholder={"Message"}/>
                </form>
                <Button className={"[&]:px-20 [&]:py-4 [&]:text-lg"}>I&apos;m in</Button>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                </p>
            </div>
        </div>
    </>);
}