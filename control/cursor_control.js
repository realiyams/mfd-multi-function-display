let blinkInterval = null;
let currentBlinkingElement = null;

let selectedCursor = 0;

const cursorTarget = [
  '',
  'vor1',
  'fms',
  'vor2',
  'vor1-info',
];

const elementCursorTarget = cursorTarget.map(value => {
  return document.getElementsByClassName(value);
});

const goTop = document.getElementById('MFD_goTop');
const goDown = document.getElementById('MFD_goDown');
const cursorBlinkButton = document.getElementById('MFD_blinkButtonCURSOR');

const updateCursor = () => {
  for (let elements of elementCursorTarget) {
    for (let element of elements) {
      element.classList.remove("cursor-selected");
    }
  }

  const currentElements = elementCursorTarget[selectedCursor];
  if (currentElements.length > 0) {
    currentElements[0].classList.add("cursor-selected");
  }

  if (blinkInterval && currentBlinkingElement !== document.querySelector('.cursor-selected')) {
    clearInterval(blinkInterval);
    blinkInterval = null;
    currentBlinkingElement = null;
    cursorBlinkButton.textContent = `CURSOR START BLINK`;
  }
};

goTop.addEventListener('click', () => {
  selectedCursor = (selectedCursor - 1 + cursorTarget.length) % cursorTarget.length;
  updateCursor();
});

goDown.addEventListener('click', () => {
  selectedCursor = (selectedCursor + 1) % cursorTarget.length;
  updateCursor();
});

const toggleBlink = () => {
  const selectedElement = document.querySelector('.cursor-selected');

  if (!selectedElement) {
    clearInterval(blinkInterval);
    blinkInterval = null;
    currentBlinkingElement = null;
    cursorBlinkButton.textContent = `CURSOR START BLINK`;
    return;
  }

  if (currentBlinkingElement === selectedElement) {
    clearInterval(blinkInterval);
    blinkInterval = null;
    currentBlinkingElement = null;
    cursorBlinkButton.textContent = `CURSOR START BLINK`;
  } else {
    if (blinkInterval) {
      clearInterval(blinkInterval);
    }

    currentBlinkingElement = selectedElement;
    blinkInterval = setInterval(() => {
      selectedElement.classList.remove("cursor-selected");
      setTimeout(() => {
        selectedElement.classList.add("cursor-selected");
      }, 250);
    }, 500);
    cursorBlinkButton.textContent = `CURSOR STOP BLINK`;
  }
};

cursorBlinkButton.addEventListener('click', toggleBlink);

updateCursor();
