// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const image = document.querySelector('#expose img');
  const audio = document.querySelector('audio');
  const playButton = document.querySelector('button');

  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');

  const jsConfetti = new JSConfetti()

  hornSelect.addEventListener('change', () => {
    const horn = hornSelect.value;

    if (horn === 'air-horn') {
      image.src = 'assets/images/air-horn.svg';
      image.alt = 'Air Horn';
      audio.src = 'assets/audio/air-horn.mp3';
    } 
    else if (horn === 'car-horn') {
      image.src = 'assets/images/car-horn.svg';
      image.alt = 'Car Horn';
      audio.src = 'assets/audio/car-horn.mp3';
    } 
    else if (horn === 'party-horn') {
      image.src = 'assets/images/party-horn.svg';
      image.alt = 'Party Horn';
      audio.src = 'assets/audio/party-horn.mp3';
    }
  });

  volumeSlider.addEventListener('input', () => {
    const volumeValue = volumeSlider.value;

    audio.volume = volumeValue / 100;
    // Hint told me that slider range is from 0 to 100

    if (volumeValue >= 1 && volumeValue < 33) {
      volumeIcon.src = `assets/icons/volume-level-1.svg`;
      volumeIcon.alt = `Volume level 1`;
    } 
    else if (volumeValue >= 33 && volumeValue < 67) {
      volumeIcon.src = `assets/icons/volume-level-2.svg`;
      volumeIcon.alt = `Volume level 2`;
    } 
    else if (volumeValue >= 67) {
      volumeIcon.src = `assets/icons/volume-level-3.svg`;
      volumeIcon.alt = `Volume level 3`;
    }
    else {
      volumeIcon.src = `assets/icons/volume-level-0.svg`;
      volumeIcon.alt = `Volume level 0`;
    }
  });

  playButton.addEventListener('click', () => {
    audio.play();

    if (image.src == 'assets/images/party-horn.svg'){
      jsConfetti.addConfetti()
    }
  });
}
