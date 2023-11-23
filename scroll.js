import { play } from "./audio";
import { parallaxScroll } from "./parallax";

let canPlayAudio = true;
window.onscroll = () => {
    const audioElement = document.querySelector("#audio-player");
    if (canPlayAudio) {
        play(audioElement);
        canPlayAudio = false;
    } 
    parallaxScroll();
    if (window.scrollY === 0) canPlayAudio = true;
};