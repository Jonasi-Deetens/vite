export function createAudioElement(sound) {
    const audio = document.createElement("audio");
    audio.id = "audio-player";
    audio.src = sound;
    audio.autoplay = false;
    audio.muted = true;
    audio.setAttribute("type", "mp3");
    return audio;
}

export function addMuteButton(element, audioElement) {
    const muteButton = document.createElement("button");
    muteButton.id = "unmute-button";
    muteButton.textContent = "Unmute";
    muteButton.addEventListener("click", () => toggleMute(audioElement, muteButton));
    element.appendChild(muteButton);
}

export function toggleMute(audioElement, muteButton) {
    audioElement.muted = !audioElement.muted;
    muteButton.textContent = audioElement.muted ? "Unmute" : "Mute";
}

export function play(audioElement) {
  if (window.scrollY <= 500) audioElement.volume = 0.5 - window.scrollY / 1000;

  if (audioElement.paused) {
    audioElement.play();
  }
}
