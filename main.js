import "./style.css";
import "./scroll.js";
import { addParallaxImages } from "./parallax.js";
import { addAudioElement } from "./audio.js";

document.querySelector("#app").innerHTML = `
<header id="parallax-container">
</header>
<main>
    <h1 class="center">Welcome to my domain.</h1>
</main>
`;
addAudioElement(document.querySelector("#parallax-container"), "./sounds/domain-expansion.mp3");
addParallaxImages(document.querySelector("#parallax-container"));