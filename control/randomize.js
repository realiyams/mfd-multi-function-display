// import pfd from "./pfd";

let intervalId = null;

function getRandomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function toggleResetAll() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    randomizeButton.textContent = "START RANDOMIZE";
  }

  pfd.setPurpleNeedle(0);
  pfd.setBlueNeedle(0);
  pfd.setGreenNeedle(0);
  pfd.setYellowNeedle(0);
  pfd.setWhiteNeedle(0);
  pfd.setHeading(360);
}

function randomizeValues() {
  pfd.setPurpleNeedle(getRandomInRange(0, 360).toFixed(2));
  pfd.setBlueNeedle(getRandomInRange(0, 360).toFixed(2));
  pfd.setGreenNeedle(getRandomInRange(0, 360).toFixed(2));
  pfd.setYellowNeedle(getRandomInRange(0, 360).toFixed(2));
  pfd.setWhiteNeedle(getRandomInRange(0, 360).toFixed(2));
  pfd.setHeading(getRandomInRange(0, 360).toFixed(2));
}

function toggleRandomize() {
  if (intervalId === null) {
    intervalId = setInterval(randomizeValues, 500);
    randomizeButton.textContent = "STOP RANDOMIZE";
  } else {
    clearInterval(intervalId);
    intervalId = null;
    randomizeButton.textContent = "START RANDOMIZE";
  }
}

const randomizeButton = document.getElementById('PFD_ONE_RandomizeButton')
randomizeButton.addEventListener('click', toggleRandomize)

const resetAll = document.getElementById('PFD_ONE_ResetAll')
resetAll.addEventListener('click', toggleResetAll)

/*
pfd.setPurpleNeedle(dari 0 sampai 360);
pfd.setBlueNeedle(dari 0 sampai 360);
pfd.setGreenNeedle(dari 0 sampai 360);
pfd.setYellowNeedle(dari 0 sampai 360);
pfd.setWhiteNeedle(dari 0 sampai 360);
pfd.setHeading(dari 0 sampai 360);
*/