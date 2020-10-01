
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.set(".scale-right", {transformOrigin: "right"});

const section2TL = gsap.timeline();
section2TL.from("#section-2",{duration: 1, scaleX:0})
.from("#section-2 article",{duration:0.5,alpha:0, y: -300})
         .from("#section-2 aside",{duration:0.5,alpha:0});


export function section2Animation(){

    ScrollTrigger.create({
       // markers: true,
        animation: section2TL,
        //toggleActions: "play none none none",
        trigger: "#section-2",
        start:"top, 50%",
        end: "bottom 50%"
    });
} 