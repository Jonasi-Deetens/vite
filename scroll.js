import { play } from "./audio";
import { parallaxScroll } from "./parallax";

let canPlayAudio = true;
window.onscroll = () => {
    if (canPlayAudio) {
        play();
        canPlayAudio = false;
    } 
    parallaxScroll();
    if (window.scrollY === 0) canPlayAudio = true;
};