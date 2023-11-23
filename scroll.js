import { play } from "./audio";
import { parallaxScroll } from "./parallax";

let canPlayAudio = true;

window.onscroll = () => {
  const maxScroll = 400;
  if (canPlayAudio) {
    const audioElement = document.querySelector("#audio-player");
    play(audioElement);
    canPlayAudio = false;
  }
  if (window.scrollY === 0) canPlayAudio = true;

  if (window.scrollY <= maxScroll) {
    parallaxScroll(window.scrollY, maxScroll);
  } else parallaxScroll(maxScroll, maxScroll);
};
