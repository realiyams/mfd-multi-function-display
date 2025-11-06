const pfd = {
  blinkInterval: null,
  currentBlinkingElement: null,
  selectedCursor: 0,
  cursorTarget: [
    '',
    'il-left-bottom-vor1',
    'il-left-bottom-details',
    'il-adf2-right-bottom',
    'il-right-bottom-details',
  ],
  elementCursorTarget: [],
  cursorBlinkButton: document.getElementById('PFD_ONE_blinkButtonCURSOR'),
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
        element.classList.remove("il-cursor-selected");
      }
    }
    const currentElements = this.elementCursorTarget[this.selectedCursor];
    if (currentElements && currentElements.length > 0) {
      currentElements[0].classList.add("il-cursor-selected");
    }

    if (this.blinkInterval && this.currentBlinkingElement !== document.querySelector('.il-cursor-selected')) {
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
        selectedElement.classList.toggle("il-cursor-selected");
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
      var sliderUngu = document.getElementById("PFD_ONE_U1");
      var numberUngu = document.getElementById("PFD_ONE_SliderUngu1Number");
      var garisUngu = document.getElementById("PFD_ONE_L16");

      sliderUngu.value = degree;
      numberUngu.value = degree;
      garisUngu.style.transform = `rotate(${degree}deg)`;
    }
  },
  setPurpleNeedleBody(value) {
    var offsetX = value;

    var SliderGeser = document.getElementById("PFD_ONE_U2");
    var garisUnguGeser = document.getElementById("PFD_ONE_G25");
    var SliderUngu2Number = document.getElementById('PFD_ONE_SliderUngu2Number');

    SliderGeser.value = offsetX;
    SliderUngu2Number.value = offsetX;
    garisUnguGeser.style.transform = `translateX(${offsetX}px)`;
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
      var SliderMuterBiru = document.getElementById("PFD_ONE_B1");
      var garisBiru = document.getElementById("PFD_ONE_L15");
      var SliderBiru1Number = document.getElementById("PFD_ONE_SliderBiru1Number");

      SliderMuterBiru.value = degree;
      SliderBiru1Number.value = degree;
      garisBiru.style.transform = `rotate(${degree}deg)`;
    }
  },
  setBlueNeedleBody(value) {
    var offsetY = value;

    var SliderGeserBiru = document.getElementById("PFD_ONE_B2");
    var garisBiruGeser = document.getElementById("PFD_ONE_R41");
    var SliderBiru2Number = document.getElementById('PFD_ONE_SliderBiru2Number');

    SliderGeserBiru.value = offsetY;
    SliderBiru2Number.value = offsetY;
    garisBiruGeser.style.transform = `translateY(${offsetY}px)`;
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
      var SliderHijau = document.getElementById("PFD_ONE_H1");
      var garisHijau = document.getElementById("PFD_ONE_L12");
      var SliderHijauNumber = document.getElementById('PFD_ONE_SliderHijauNumber');

      SliderHijau.value = degree;
      SliderHijauNumber.value = degree;
      garisHijau.style.transform = `rotate(${degree}deg)`;
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
      var SliderKuning = document.getElementById("PFD_ONE_K")
      var garisKuning = document.getElementById("PFD_ONE_L14");
      var SliderKuningNumber = document.getElementById('PFD_ONE_SliderKuningNumber');

      SliderKuning.value = degree;
      SliderKuningNumber.value = degree;
      garisKuning.style.transform = `rotate(${degree}deg)`;
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

      var SliderMuterPutih = document.getElementById("PFD_ONE_P");
      var garisPutih = document.getElementById("PFD_ONE_L18");
      var teksPutih = document.getElementById("PFD_ONE_PT");
      var SliderPutihNumber = document.getElementById('PFD_ONE_SliderPutihNumber');

      SliderMuterPutih.value = degree;
      SliderPutihNumber.value = degree;
      garisPutih.style.transform = `rotate(${degree}deg)`;
      teksPutih.style.transform = `rotate(${-degree}deg)`;
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

    var arah = document.getElementById("PFD_ONE_L17");
    var Tulisanderajat = document.getElementById("PFD_ONE_D1");
    var LG = document.getElementById("PFD_ONE_LG");

    var tulisanArah = arah.querySelectorAll('.il-pfd-one .lingkaran17 > div');
    var rotationSlider = document.getElementById("PFD_ONE_HeadingSlider");
    var headingNumber = document.getElementById("PFD_ONE_HeadingNumber");

    let ilHeadingBug = document.getElementById("ilHeadingBug");
    let ilHeadingBugSlider = document.getElementById("PFD_ONE_HEADING_BUG");
    let ilHeadingBugNumber = document.getElementById("PFD_ONE_HEADING_BUG_NUMBER");

    function applyRotation(value) {
      var rotationDegrees = 360 - (value % 360);
    
      if (LG) LG.style.transform = "rotate(" + rotationDegrees + "deg)";
      arah.style.transform = "rotate(" + rotationDegrees + "deg)";
      
      // Format value menjadi 3 digit
      Tulisanderajat.innerText = String(parseInt(value, 10)).padStart(3, '0');
    
      tulisanArah.forEach(function (elem) {
        elem.style.transform = "rotate(" + (-rotationDegrees) + "deg)";
      });
    }

    rotationSlider.value = numberValue;
    headingNumber.value = numberValue;
    applyRotation(value);

    if (this.headingBugUsed) {
      this.headingSecondCompare = numberValue
      this.headingDelta = this.headingSecondCompare - this.headingFirstCompare
  
      this.headingBugValue = this.headingBugValue - this.headingDelta
      ilHeadingBugSlider.value = this.headingBugValue;
      ilHeadingBugNumber.value = this.headingBugValue;
      ilHeadingBug.style.transform = "rotate(" + (this.headingBugValue) + "deg)";
  
      // if (Math.abs(this.headingBugValue) <= 1 || Math.abs(this.headingBugValue) > 359) {
      //   this.headingBugUsed = false
      //   ilHeadingBugSlider.value = 0;
      //   ilHeadingBugNumber.value = 0;
      //   ilHeadingBug.style.transform = "rotate(" + (0) + "deg)";
      // }
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
const brightness = document.getElementById('il_PFD_ONE_BRIGHTNESS');

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

pfd.initialize();

// var ws = myWs();

// ws.flightData = function (s) {
//   const data = s.split(',');

//   pfd.setHeading(parseFloat(data[4]));
//   pfd.setGroundSpeed(parseFloat(data[11]))
// }

// ws.ilHeadingBugReport = function (data) {
//   const json = JSON.parse(data)

//   // if (json.isReset) {
//   //   pfd.headingBugUsed = false;
//   // } else {
//   //   pfd.headingBugUsed = true;
//   // }
//   pfd.headingBugUsed = true;
//   var degree = parseInt(json.angle, 10);

//   let ilHeadingBug = document.getElementById("ilHeadingBug");
//   let ilHeadingBugSlider = document.getElementById("PFD_ONE_HEADING_BUG");
//   let ilHeadingBugNumber = document.getElementById("PFD_ONE_HEADING_BUG_NUMBER");

//   if (degree === -1) {
//     degree = 360;
//   } else if (degree === 361) {
//     degree = 0;
//   } else if (degree < 0) {
//     degree = 360;
//   } else if (degree > 360) {
//     degree = 0;
//   }

//   if (degree >= 0 && degree <= 360) {
//     ilHeadingBugSlider.value = degree;
//     ilHeadingBugNumber.value = degree;
//     ilHeadingBug.style.transform = `rotate(${degree}deg)`;
//     pfd.headingBugValue = degree
//   }
// }

// export default pfd;

/*
[
'31.248938',    -> Speed
'2420.014893',  -> altitude
'-7.173916',    -> pitch
'-9.131096',    -> roll
'286.744202',   -> heading
'-0.935913',    -> rate
'-23.230877',   -> Ball
'-11.0',        // Rest Of Them Not My Use Case Data //
'0.0', 
'-1.067713', 
'927.033264', 
'15.212843'
]
*/
