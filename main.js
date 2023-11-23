import "./style.css";
import "./scroll.js";
import sound from "./src/sounds/domain-expansion.mp3";
import parallaxImageData from "./parallaxImages.js";
import { addParallaxImage, createParallaxHeader } from "./parallax.js";
import { createAudioElement, addMuteButton } from "./audio.js";

const addParallaxImages = () => {
  parallaxImageData.forEach((data) => {
    addParallaxImage(data.image, data.startPos, data.endPos, data.startScale, data.endScale);
  });
};

const addAudioElement = (element) => {
  const audioElement = createAudioElement(sound);
  element.appendChild(audioElement);
  addMuteButton(element, audioElement);
};

const init = () => {
  const app = document.querySelector("#app");

  const header = createParallaxHeader();
  const main = document.createElement("main");
  const h1 = document.createElement("h1");
  h1.classList.add("center");
  h1.textContent = "Welcome to my domain!";

  main.appendChild(h1);
  app.appendChild(header);
  app.appendChild(main);

  addAudioElement(header);
  addParallaxImages();
};

init();
