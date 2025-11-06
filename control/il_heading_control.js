var arah = document.getElementById("PFD_ONE_L17");
var Tulisanderajat = document.getElementById("PFD_ONE_D1");
var LG = document.getElementById("PFD_ONE_LG");

var tulisanArah = arah.querySelectorAll('.lingkaran17 > div');
var rotationSlider = document.getElementById("PFD_ONE_HeadingSlider");
var headingNumber = document.getElementById("PFD_ONE_HeadingNumber");

let headingBugUsed = true;
let headingBugValue = 0;
let headingFirstCompare = 0;
let headingSecondCompare = 0;
let headingDelta = 0;

function applyRotation(value) {
  var rotationDegrees = 360 - (value % 360);

  if (LG) LG.style.transform = "rotate(" + rotationDegrees + "deg)";
  arah.style.transform = "rotate(" + rotationDegrees + "deg)";

  // Format value menjadi 3 digit
  Tulisanderajat.innerText = String(value).padStart(3, '0');

  tulisanArah.forEach(function (elem) {
    elem.style.transform = "rotate(" + (-rotationDegrees) + "deg)";
  });
}

rotationSlider.addEventListener("input", function () {
  var sliderValue = parseInt(rotationSlider.value, 10);
  headingNumber.value = sliderValue;
  applyRotation(sliderValue);

  if (headingBugUsed) {
    headingSecondCompare = sliderValue
    headingDelta = headingSecondCompare - headingFirstCompare

    headingBugValue = headingBugValue - headingDelta
    ilHeadingBugSlider.value = headingBugValue;
    ilHeadingBugNumber.value = headingBugValue;
    ilHeadingBug.style.transform = "rotate(" + (headingBugValue) + "deg)";

    // if (Math.abs(headingBugValue) <= 1 || Math.abs(headingBugValue) > 359) {
    //   headingBugUsed = false
    //   ilHeadingBug.style.transform = "rotate(" + (0) + "deg)";
    //   ilHeadingBugSlider.value = 0;
    //   ilHeadingBugNumber.value = 0;
    // }
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

  rotationSlider.value = numberValue;
  headingNumber.value = numberValue;
  applyRotation(numberValue);

  if (headingBugUsed) {
    headingSecondCompare = numberValue
    headingDelta = headingSecondCompare - headingFirstCompare

    headingBugValue = headingBugValue - headingDelta
    ilHeadingBugSlider.value = headingBugValue;
    ilHeadingBugNumber.value = headingBugValue;
    ilHeadingBug.style.transform = "rotate(" + (headingBugValue) + "deg)";

    // if (Math.abs(headingBugValue) <= 1 || Math.abs(headingBugValue) > 359) {
    //   headingBugUsed = false
    //   ilHeadingBugSlider.value = 0;
    //   ilHeadingBugNumber.value = 0;
    //   ilHeadingBug.style.transform = "rotate(" + (0) + "deg)";
    // }
  }
  headingFirstCompare = numberValue;
});

applyRotation(rotationSlider.value);
