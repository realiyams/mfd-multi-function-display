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

  mfd.setPurpleNeedle(0);
  mfd.setBlueNeedle(0);
  mfd.setGreenNeedle(0);
  mfd.setYellowNeedle(0);
  mfd.setWhiteNeedle(0);
  mfd.setHeading(360);
}

function randomizeValues() {
  mfd.setPurpleNeedle(getRandomInRange(0, 360).toFixed(2));
  mfd.setBlueNeedle(getRandomInRange(0, 360).toFixed(2));
  mfd.setGreenNeedle(getRandomInRange(0, 360).toFixed(2));
  mfd.setYellowNeedle(getRandomInRange(0, 360).toFixed(2));
  mfd.setWhiteNeedle(getRandomInRange(0, 360).toFixed(2));
  mfd.setHeading(getRandomInRange(0, 360).toFixed(2));
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

const randomizeButton = document.getElementById('MFD_RandomizeButton')
randomizeButton.addEventListener('click', toggleRandomize)

const resetAll = document.getElementById('MFD_ResetAll')
resetAll.addEventListener('click', toggleResetAll)