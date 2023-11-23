import "./style.css";
import "./scroll.js";
import sound from "./src/sounds/domain-expansion.mp3";
import { addParallaxImages } from "./parallax.js";
import { createAudioElement, addMuteButton } from "./audio.js";

const app = document.querySelector("#app");

const header = document.createElement("header");
header.id = "parallax-container";
const main = document.createElement("main");
const h1 = document.createElement("h1");
h1.classList.add("center");
h1.textContent = "Welcome to my domain!";

main.appendChild(h1);
app.appendChild(header);
app.appendChild(main);

const audioElement = createAudioElement(sound);

header.appendChild(audioElement);
addMuteButton(header, audioElement);
addParallaxImages(header);