const mfd = {
  blinkInterval: null,
  currentBlinkingElement: null,
  selectedCursor: 0,
  cursorTarget: [
    '',
    'vor1',
    'fms',
    'vor2',
    'vor1-info',
  ],
  elementCursorTarget: [],
  cursorBlinkButton: document.getElementById('MFD_blinkButtonCURSOR'),
  headingBugUsed: true,
  headingBugValue: 0,
  headingFirstCompare: 0,
  headingSecondCompare: 0,
  headingDelta: 0,
  initialize() {
    this.elementCursorTarget = this.cursorTarget.map(value => {
      return Array.from(document.getElementsByClassName(value));
    });
  },
  updateCursor() {
    for (let elements of this.elementCursorTarget) {
      for (let element of elements) {
        element.classList.remove("cursor-selected");
      }
    }
    const currentElements = this.elementCursorTarget[this.selectedCursor];
    if (currentElements && currentElements.length > 0) {
      currentElements[0].classList.add("cursor-selected");
    }

    if (this.blinkInterval && this.currentBlinkingElement !== document.querySelector('.cursor-selected')) {
      clearInterval(this.blinkInterval);
      this.blinkInterval = null;
      this.currentBlinkingElement = null;
      if (this.cursorBlinkButton) {
        this.cursorBlinkButton.textContent = `CURSOR START BLINK`;
      }
    }
  },
  cursorGoTop() {
    this.selectedCursor = (this.selectedCursor - 1 + this.cursorTarget.length) % this.cursorTarget.length;
    this.updateCursor();
  },
  cursorGoDown() {
    this.selectedCursor = (this.selectedCursor + 1) % this.cursorTarget.length;
    this.updateCursor();
  },
  toggleBlink() {
    const selectedElement = document.querySelector('.il-cursor-selected');

    if (!selectedElement) {
      clearInterval(this.blinkInterval);
      this.blinkInterval = null;
      this.currentBlinkingElement = null;
      this.cursorBlinkButton.textContent = `CURSOR START BLINK`;
      return;
    }

    if (this.currentBlinkingElement === selectedElement) {
      clearInterval(this.blinkInterval);
      this.blinkInterval = null;
      this.currentBlinkingElement = null;
      this.cursorBlinkButton.textContent = `CURSOR START BLINK`;
    } else {
      if (this.blinkInterval) {
        clearInterval(this.blinkInterval);
      }

      this.currentBlinkingElement = selectedElement;
      this.blinkInterval = setInterval(() => {
        selectedElement.classList.toggle("cursor-selected");
      }, 500);
      this.cursorBlinkButton.textContent = `CURSOR STOP BLINK`;
    }
  },
  setPurpleNeedle(value) {
    var degree = value;

    if (degree === -1) {
      degree = 360;
    } else if (degree === 361) {
      degree = 0;
    } else if (degree < 0) {
      degree = 360;
    } else if (degree > 360) {
      degree = 0;
    }

    if (degree >= 0 && degree <= 360) {
      var purpleSlider = document.getElementById("MFD_PURPLE_NEEDLE_SLIDER");
      var purpleNumber = document.getElementById("MFD_PURPLE_NEEDLE_NUMBER");
      var purpleNeedle = document.getElementById("MFD_PURPLE_NEEDLE");

      purpleSlider.value = degree;
      purpleNumber.value = degree;
      purpleNeedle.style.transform = `rotate(${degree}deg)`;
    }
  },
  setPurpleNeedleBody(value) {
    var offsetX = value;

    var purpleBodySlider = document.getElementById("MFD_PURPLE_NEEDLE_BODY_SLIDER");
    var purpleBodyNumber = document.getElementById('MFD_PURPLE_NEEDLE_BODY_NUMBER');
    var purpleNeedleBody = document.getElementById("MFD_PURPLE_NEEDLE_BODY");

    purpleBodySlider.value = offsetX;
    purpleBodyNumber.value = offsetX;
    purpleNeedleBody.style.transform = `translateX(${offsetX}px)`;
  },
  setBlueNeedle(value) {
    var degree = value;

    if (degree === -1) {
      degree = 360;
    } else if (degree === 361) {
      degree = 0;
    } else if (degree < 0) {
      degree = 360;
    } else if (degree > 360) {
      degree = 0;
    }

    if (degree >= 0 && degree <= 360) {
      var blueSlider = document.getElementById("MFD_BlUE_NEEDLE_SLIDER");
      var blueNumber = document.getElementById("MFD_BlUE_NEEDLE_NUMBER");
      var blueNeedle = document.getElementById("MFD_BlUE_NEEDLE");

      blueSlider.value = degree;
      blueNumber.value = degree;
      blueNeedle.style.transform = `rotate(${degree}deg)`;
    }
  },
  setBlueNeedleBody(value) {
    var offsetY = value;

    var blueBodySlider = document.getElementById("MFD_BlUE_NEEDLE_BODY_SLIDER");
    var blueBodyNumber = document.getElementById('MFD_BlUE_NEEDLE_BODY_NUMBER');
    var blueNeedleBody = document.getElementById("MFD_BlUE_NEEDLE_BODY");

    blueBodySlider.value = offsetY;
    blueBodyNumber.value = offsetY;
    blueNeedleBody.style.transform = `translateY(${offsetY}px)`;
  },
  setGreenNeedle(value) {
    var degree = value;

    if (degree === -1) {
      degree = 360;
    } else if (degree === 361) {
      degree = 0;
    } else if (degree < 0) {
      degree = 360;
    } else if (degree > 360) {
      degree = 0;
    }

    if (degree >= 0 && degree <= 360) {
      var greenSlider = document.getElementById("MFD_GREEN_NEEDLE_SLIDER");
      var greenNumber = document.getElementById('MFD_GREEN_NEEDLE_NUMBER');
      var greenNeedle = document.getElementById("MFD_GREEN_NEEDLE");

      greenSlider.value = degree;
      greenNumber.value = degree;
      greenNeedle.style.transform = `rotate(${degree}deg)`;
    }
  },
  setYellowNeedle(value) {
    var degree = value;

    if (degree === -1) {
      degree = 360;
    } else if (degree === 361) {
      degree = 0;
    } else if (degree < 0) {
      degree = 360;
    } else if (degree > 360) {
      degree = 0;
    }

    if (degree >= 0 && degree <= 360) {
      var yellowSlider = document.getElementById("MFD_YELLOW_NEEDLE_SLIDER")
      var yellowNumber = document.getElementById('MFD_YELLOW_NEEDLE_NUMBER');
      var yellowNeedle = document.getElementById("MFD_YELLOW_NEEDLE");

      yellowSlider.value = degree;
      yellowNumber.value = degree;
      yellowNeedle.style.transform = `rotate(${degree}deg)`;
    }
  },
  setWhiteNeedle(value) {
    var degree = value;

    if (degree === -1) {
      degree = 360;
    } else if (degree === 361) {
      degree = 0;
    } else if (degree < 0) {
      degree = 360;
    } else if (degree > 360) {
      degree = 0;
    }

    if (degree >= 0 && degree <= 360) {

      var whiteSlider = document.getElementById("MFD_WHITE_NEEDLE_SLIDER");
      var whiteNumber = document.getElementById('MFD_WHITE_NEEDLE_NUMBER');
      var whiteNeedle = document.getElementById("MFD_WHITE_NEEDLE");
      var whiteDegree = document.getElementById("MFD_WHITE_NEEDLE_DEGREE");

      whiteSlider.value = degree;
      whiteNumber.value = degree;
      whiteNeedle.style.transform = `rotate(${degree}deg)`;
      whiteDegree.style.transform = `rotate(${-degree}deg)`;
    }
  },
  setHeading(value) {
    var numberValue = parseInt(value, 10);

    if (numberValue === -1) {
      numberValue = 360;
    } else if (numberValue === 361) {
      numberValue = 0;
    } else if (numberValue < 0) {
      numberValue = 360;
    } else if (numberValue > 360) {
      numberValue = 0;
    }

    var point = document.getElementById("MFD_POINTS");
    var headingDegree = document.getElementById("HEADING_DEGREE");
    var headings = document.getElementById("MFD_HEADINGS");

    var points = point.querySelectorAll('.points > div');
    var headingSlider = document.getElementById("MFD_HEADING_SLIDER");
    var headingNumber = document.getElementById("MFD_HEADING_NUMBER");

    let headingBugSlider = document.getElementById("MFD_HEADING_BUG_SLIDER");
    let headingBugNumber = document.getElementById("MFD_HEADING_BUG_NUMBER");
    let headingBug = document.getElementById("MFD_HEADING_BUG");

    function applyRotation(value) {
      var rotationDegrees = 360 - (value % 360);

      if (headings) headings.style.transform = "rotate(" + rotationDegrees + "deg)";
      point.style.transform = "rotate(" + rotationDegrees + "deg)";

      headingDegree.innerText = String(parseInt(value, 10)).padStart(3, '0');

      points.forEach(function (elem) {
        elem.style.transform = "rotate(" + (-rotationDegrees) + "deg)";
      });
    }

    headingSlider.value = numberValue;
    headingNumber.value = numberValue;
    applyRotation(value);

    if (this.headingBugUsed) {
      this.headingSecondCompare = numberValue
      this.headingDelta = this.headingSecondCompare - this.headingFirstCompare

      this.headingBugValue = this.headingBugValue - this.headingDelta
      headingBugSlider.value = this.headingBugValue;
      headingBugNumber.value = this.headingBugValue;
      headingBug.style.transform = "rotate(" + (this.headingBugValue) + "deg)";

    }
    this.headingFirstCompare = numberValue;
  },
  setGroundSpeed(value) {
    const groundSpeed = document.getElementById('gs-value')
    const tas = document.getElementById('tas-value')

    groundSpeed.innerText = parseInt(value)
    tas.innerText = parseInt(value)
  }
}

const minusBrightness = document.getElementById('T2');
const plusBrightness = document.getElementById('T3');
const brightness = document.getElementById('MFD_BRIGHTNESS');

let brightnessLevel = 0;
brightness.style.opacity = brightnessLevel;

plusBrightness.addEventListener('click', function () {
  brightnessLevel = Math.max(0, brightnessLevel - 0.1);
  brightnessLevel = parseFloat(brightnessLevel.toFixed(2));
  brightness.style.opacity = brightnessLevel;
});

minusBrightness.addEventListener('click', function () {
  if (brightnessLevel < 0.9) {
    brightnessLevel = Math.min(1, brightnessLevel + 0.1);
    brightnessLevel = parseFloat(brightnessLevel.toFixed(2));
    brightness.style.opacity = brightnessLevel;
  }
});

mfd.initialize();