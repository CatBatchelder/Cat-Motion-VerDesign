
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section1TL = gsap.timeline();
section1TL.from("#section-1-text h3",{duration:0.5,alpha:0, x:300})
            .from("#section-1-text h1",{duration:0.5,alpha:0,y:300});


export function section1Animation(){

    ScrollTrigger.create({
        //markers: true,
        animation: section1TL,
        toggleActions: "play none none none",
        trigger: "#section-1 img",
        start:"top, 50%",
        end: "bottom 50%"
    });
} 