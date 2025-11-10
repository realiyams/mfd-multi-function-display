/*------------------ PURPLE NEEDLE -------------------*/
var purpleSlider = document.getElementById("MFD_PURPLE_NEEDLE_SLIDER");
var purpleNumber = document.getElementById("MFD_PURPLE_NEEDLE_NUMBER");
var purpleNeedle = document.getElementById("MFD_PURPLE_NEEDLE");

purpleSlider.addEventListener("input", function () {
  var degree = purpleSlider.value;
  purpleNumber.value = degree;
  purpleNeedle.style.transform = `rotate(${degree}deg)`;
});

purpleNumber.addEventListener("input", function () {
  var degree = purpleNumber.value;

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
    purpleSlider.value = degree;
    purpleNumber.value = degree;
    purpleNeedle.style.transform = `rotate(${degree}deg)`;
  }
});

var purpleBodySlider = document.getElementById("MFD_PURPLE_NEEDLE_BODY_SLIDER");
var purpleBodyNumber = document.getElementById('MFD_PURPLE_NEEDLE_BODY_NUMBER');
var purpleNeedleBody = document.getElementById("MFD_PURPLE_NEEDLE_BODY");

purpleBodySlider.addEventListener("input", function () {
  var offsetX = purpleBodySlider.value;
  purpleBodyNumber.value = offsetX
  purpleNeedleBody.style.transform = `translateX(${offsetX}px)`;
});

purpleBodyNumber.addEventListener("input", function () {
  var offsetX = purpleBodyNumber.value;
  purpleBodySlider.value = offsetX
  purpleNeedleBody.style.transform = `translateX(${offsetX}px)`;
});

/*-------------------- BLUE NEEDLE ----------------------*/
var blueSlider = document.getElementById("MFD_BlUE_NEEDLE_SLIDER");
var blueNumber = document.getElementById("MFD_BlUE_NEEDLE_NUMBER");
var blueNeedle = document.getElementById("MFD_BlUE_NEEDLE");

blueSlider.addEventListener("input", function () {
  var degree = blueSlider.value;
  blueNumber.value = degree;
  blueNeedle.style.transform = `rotate(${degree}deg)`;
})

blueNumber.addEventListener("input", function () {
  var degree = blueNumber.value;

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
    blueSlider.value = degree;
    blueNumber.value = degree;
    blueNeedle.style.transform = `rotate(${degree}deg)`;
  }
});

var blueBodySlider = document.getElementById("MFD_BlUE_NEEDLE_BODY_SLIDER");
var blueBodyNumber = document.getElementById('MFD_BlUE_NEEDLE_BODY_NUMBER');
var blueNeedleBody = document.getElementById("MFD_BlUE_NEEDLE_BODY");

blueBodySlider.addEventListener("input", function () {
  var offsetY = blueBodySlider.value;
  blueBodyNumber.value = offsetY;
  blueNeedleBody.style.transform = `translateY(${offsetY}px)`;
});

blueBodyNumber.addEventListener("input", function () {
  var offsetY = blueBodyNumber.value;
  blueBodySlider.value = offsetY;
  blueNeedleBody.style.transform = `translateY(${offsetY}px)`;
});

/*----------------- GREEN NEEDLE -------------------*/
var greenSlider = document.getElementById("MFD_GREEN_NEEDLE_SLIDER");
var greenNumber = document.getElementById('MFD_GREEN_NEEDLE_NUMBER');
var greenNeedle = document.getElementById("MFD_GREEN_NEEDLE");

greenSlider.addEventListener("input", function () {
  var degree = greenSlider.value;
  greenNumber.value = degree;
  greenNeedle.style.transform = `rotate(${degree}deg)`;
})

greenNumber.addEventListener("input", function () {
  var degree = greenNumber.value;

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
    greenSlider.value = degree;
    greenNumber.value = degree;
    greenNeedle.style.transform = `rotate(${degree}deg)`;
  }
});

/*------------------- YELLOW NEEDLE --------------------*/
var yellowSlider = document.getElementById("MFD_YELLOW_NEEDLE_SLIDER")
var yellowNumber = document.getElementById('MFD_YELLOW_NEEDLE_NUMBER');
var yellowNeedle = document.getElementById("MFD_YELLOW_NEEDLE");

yellowSlider.addEventListener("input", function () {
  var degree = yellowSlider.value;
  yellowNumber.value = degree;
  yellowNeedle.style.transform = `rotate(${degree}deg)`;
});

yellowNumber.addEventListener("input", function () {
  var degree = yellowNumber.value;

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
    yellowSlider.value = degree;
    yellowNumber.value = degree;
    yellowNeedle.style.transform = `rotate(${degree}deg)`;
  }
});

/*------------- SLIDER PUTIH -------------*/
var whiteSlider = document.getElementById("MFD_WHITE_NEEDLE_SLIDER");
var whiteNumber = document.getElementById('MFD_WHITE_NEEDLE_NUMBER');
var whiteNeedle = document.getElementById("MFD_WHITE_NEEDLE");
var whiteDegree = document.getElementById("MFD_WHITE_NEEDLE_DEGREE");

whiteSlider.addEventListener("input", function () {

  var degree = whiteSlider.value;
  whiteNumber.value = degree
  whiteNeedle.style.transform = `rotate(${degree}deg)`;
  whiteDegree.style.transform = `rotate(${-degree}deg)`;
});

whiteNumber.addEventListener("input", function () {
  var degree = whiteNumber.value;

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
    whiteSlider.value = degree;
    whiteNumber.value = degree;
    whiteNeedle.style.transform = `rotate(${degree}deg)`;
    whiteDegree.style.transform = `rotate(${-degree}deg)`;
  }
});

let headingBugSlider = document.getElementById("MFD_HEADING_BUG_SLIDER");
let headingBugNumber = document.getElementById("MFD_HEADING_BUG_NUMBER");
let headingBug = document.getElementById("MFD_HEADING_BUG");

headingBugSlider.addEventListener("input", function () {
  headingBugUsed = true;
  let degree = headingBugSlider.value;
  headingBugNumber.value = degree
  headingBug.style.transform = `rotate(${degree}deg)`;
  headingBugValue = degree
});

headingBugNumber.addEventListener("input", function () {
  headingBugUsed = true
  var degree = headingBugNumber.value;

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
    headingBugSlider.value = degree;
    headingBugNumber.value = degree;
    headingBug.style.transform = `rotate(${degree}deg)`;
    headingBugValue = degree
  }
});

