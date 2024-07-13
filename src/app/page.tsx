import {Hero} from "@/components/pages/landing/Hero";
import {CountDown} from "@/components/pages/landing/CountDown";
import {About} from "@/components/pages/landing/About";
import {Steps} from "@/components/pages/landing/Steps";
import {CallToAction} from "@/components/pages/landing/CallToAction";
import {Videos} from "@/components/pages/landing/Videos";
import {ContactUs} from "@/components/pages/landing/ContactUs";
import {MobileApp} from "@/components/pages/landing/MobileApp";
import {Carrousel} from "@/components/pages/landing/Carrousel";

export default function Home() {
    return (
        <main>
            <Hero/>
            <CountDown/>
            <About/>
            <Steps/>
            <CallToAction/>
            <Videos/>
            <ContactUs/>
            <MobileApp/>
            <Carrousel/>
        </main>
    );
}
