
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const section3TL = gsap.timeline();
section3TL.from("#section-3-hero div",{duration: 2, rotate: 90, scale: 4, alpha:0})
            .from("#section-3-examples span",{duration: 2, x:-300});



export function section3Animation(){

    ScrollTrigger.create({
       //markers: true,
        animation: section3TL,
        trigger: "#section-3",
        start:"top, 50%",
        end: "bottom 50%"
    });
} 
