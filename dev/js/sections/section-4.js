
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

console.log("is section 4");

const section4TL = gsap.timeline();
section4TL.from("#section-41",{duration: 1, x:-300, alpha:0})
            .from("#section-42",{duration: 1, x:300, alpha:0})  
            .from("#section-43",{duration: 1, x:-300, alpha:0});

export function section4Animation(){

    ScrollTrigger.create({
        //markers: true,
        animation: section4TL,
        trigger: "#section-4",
        start:"top, 50%",
        end: "bottom 50%"
    });
} 