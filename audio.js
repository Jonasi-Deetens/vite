export function addAudioElement(element, sound) {
  let canPlayAudio = true;

  const addAudio = () => {
    const audio = document.createElement("audio");
    audio.id = "audio-player";
    audio.src = sound;
    audio.autoplay = false;
    audio.muted = true;
    audio.setAttribute("type", "mp3");
    element.appendChild(audio);
  };

  const addMuteButton = () => {
    const muteButton = document.createElement("button");
    muteButton.id = "unmute-button";
    muteButton.textContent = "Unmute";
    muteButton.addEventListener("click", muteAudioPlayer);
    element.appendChild(muteButton);
  };

  const playAudio = () => {
    const audio = document.querySelector("#audio-player");
    if (window.scrollY <= 500) audio.volume = 0.5 - window.scrollY / 1000;

    if (audio.paused && canPlayAudio) {
      audio.play();
      canPlayAudio = false;
    }

    if (window.scrollY === 0) canPlayAudio = true;
  };

  const muteAudioPlayer = (event) => {
    const audio = document.querySelector("#audio-player");
    audio.muted = !audio.muted;
    if (audio.muted) event.target.textContent = "Unmute";
    else event.target.textContent = "Mute";
  };

  const init = () => {
    addAudio();
    addMuteButton();

    window.onscroll = () => {
      playAudio();
    };
  };

  init();
}
