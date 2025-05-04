// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  const speakButton = document.querySelector("button");
  const textArea = document.getElementById("text-to-speak");
  const faceImage = document.querySelector("#explore img");

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
  
    voices.forEach((voice, index) => {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = index;
      voiceSelect.appendChild(option);
    });
  }
  
  // Some browsers load voices asynchronously
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  populateVoiceList();
  
  speakButton.addEventListener("click", () => {
    const text = textArea.value;
    const selectedIndex = voiceSelect.value;
  
    if (!text || selectedIndex === "select") {
      alert("Please enter text and select a voice.");
      return;
    }
  
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[selectedIndex];

    // Change image to open mouth while speaking
    utterance.onstart = () => {
      faceImage.src = "assets/images/smiling-open.png";
    };
  
    // Change image back to smiling after speaking
    utterance.onend = () => {
      faceImage.src = "assets/images/smiling.png";
    };
  
    synth.speak(utterance);
  });
}