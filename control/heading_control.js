var point = document.getElementById("MFD_POINTS");
var headingDegree = document.getElementById("HEADING_DEGREE");
var headings = document.getElementById("MFD_HEADINGS");

var points = point.querySelectorAll('.points > div');
var headingSlider = document.getElementById("MFD_HEADING_SLIDER");
var headingNumber = document.getElementById("MFD_HEADING_NUMBER");

let headingBugUsed = true;
let headingBugValue = 0;
let headingFirstCompare = 0;
let headingSecondCompare = 0;
let headingDelta = 0;

function applyRotation(value) {
  var rotationDegrees = 360 - (value % 360);

  if (headings) headings.style.transform = "rotate(" + rotationDegrees + "deg)";
  point.style.transform = "rotate(" + rotationDegrees + "deg)";

  headingDegree.innerText = String(value).padStart(3, '0');

  points.forEach(function (elem) {
    elem.style.transform = "rotate(" + (-rotationDegrees) + "deg)";
  });
}

headingSlider.addEventListener("input", function () {
  var sliderValue = parseInt(headingSlider.value, 10);
  headingNumber.value = sliderValue;
  applyRotation(sliderValue);

  if (headingBugUsed) {
    headingSecondCompare = sliderValue
    headingDelta = headingSecondCompare - headingFirstCompare

    headingBugValue = headingBugValue - headingDelta
    headingBugSlider.value = headingBugValue;
    headingBugNumber.value = headingBugValue;
    headingBug.style.transform = "rotate(" + (headingBugValue) + "deg)";

  }
  headingFirstCompare = sliderValue;
});

headingNumber.addEventListener("input", function () {
  var numberValue = parseInt(headingNumber.value, 10);

  if (numberValue === -1) {
    numberValue = 360;
  } else if (numberValue === 361) {
    numberValue = 0;
  } else if (numberValue < 0) {
    numberValue = 360;
  } else if (numberValue > 360) {
    numberValue = 0;
  }

  headingSlider.value = numberValue;
  headingNumber.value = numberValue;
  applyRotation(numberValue);

  if (headingBugUsed) {
    headingSecondCompare = numberValue
    headingDelta = headingSecondCompare - headingFirstCompare

    headingBugValue = headingBugValue - headingDelta
    headingBugSlider.value = headingBugValue;
    headingBugNumber.value = headingBugValue;
    headingBug.style.transform = "rotate(" + (headingBugValue) + "deg)";

  }
  headingFirstCompare = numberValue;
});

applyRotation(headingSlider.value);
