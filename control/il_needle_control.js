/*------------- SLIDER UNGU BERGESER -------------*/
var SliderGeser = document.getElementById("PFD_ONE_U2");
var garisUnguGeser = document.getElementById("PFD_ONE_G25");
var SliderUngu2Number = document.getElementById('PFD_ONE_SliderUngu2Number');

SliderGeser.addEventListener("input", function () {
  var offsetX = SliderGeser.value;
  SliderUngu2Number.value = offsetX
  garisUnguGeser.style.transform = `translateX(${offsetX}px)`;
});

SliderUngu2Number.addEventListener("input", function () {
  var offsetX = SliderUngu2Number.value;
  SliderGeser.value = offsetX
  garisUnguGeser.style.transform = `translateX(${offsetX}px)`;
});

var sliderUngu = document.getElementById("PFD_ONE_U1");
var numberUngu = document.getElementById("PFD_ONE_SliderUngu1Number");
var garisUngu = document.getElementById("PFD_ONE_L16");

sliderUngu.addEventListener("input", function () {
  var degree = sliderUngu.value;
  numberUngu.value = degree;
  garisUngu.style.transform = `rotate(${degree}deg)`;
});

numberUngu.addEventListener("input", function () {
  var degree = numberUngu.value;

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
    sliderUngu.value = degree;
    numberUngu.value = degree;
    garisUngu.style.transform = `rotate(${degree}deg)`;
  }
});

/*------------- SLIDER BIRU BERPUTAR -------------*/
var SliderMuterBiru = document.getElementById("PFD_ONE_B1");
var garisBiru = document.getElementById("PFD_ONE_L15");
var SliderBiru1Number = document.getElementById("PFD_ONE_SliderBiru1Number");

SliderMuterBiru.addEventListener("input", function () {
  var degree = SliderMuterBiru.value;
  SliderBiru1Number.value = degree;
  garisBiru.style.transform = `rotate(${degree}deg)`;
})

SliderBiru1Number.addEventListener("input", function () {
  var degree = SliderBiru1Number.value;

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
    SliderMuterBiru.value = degree;
    SliderBiru1Number.value = degree;
    garisBiru.style.transform = `rotate(${degree}deg)`;
  }
});

var SliderGeserBiru = document.getElementById("PFD_ONE_B2");
var garisBiruGeser = document.getElementById("PFD_ONE_R41");
var SliderBiru2Number = document.getElementById('PFD_ONE_SliderBiru2Number');

SliderGeserBiru.addEventListener("input", function () {
  var offsetY = SliderGeserBiru.value;
  SliderBiru2Number.value = offsetY;
  garisBiruGeser.style.transform = `translateY(${offsetY}px)`;
});

SliderBiru2Number.addEventListener("input", function () {
  var offsetY = SliderBiru2Number.value;
  SliderGeserBiru.value = offsetY;
  garisBiruGeser.style.transform = `translateY(${offsetY}px)`;
});

/*------------- SLIDER HIJAU -------------*/
var SliderHijau = document.getElementById("PFD_ONE_H1");
var garisHijau = document.getElementById("PFD_ONE_L12");
var SliderHijauNumber = document.getElementById('PFD_ONE_SliderHijauNumber');

SliderHijau.addEventListener("input", function () {
  var degree = SliderHijau.value;
  SliderHijauNumber.value = degree;
  garisHijau.style.transform = `rotate(${degree}deg)`;
})

SliderHijauNumber.addEventListener("input", function () {
  var degree = SliderHijauNumber.value;

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
    SliderHijau.value = degree;
    SliderHijauNumber.value = degree;
    garisHijau.style.transform = `rotate(${degree}deg)`;
  }
});

/*------------- SLIDER KUNING -------------*/
var SliderKuning = document.getElementById("PFD_ONE_K")
var garisKuning = document.getElementById("PFD_ONE_L14");
var SliderKuningNumber = document.getElementById('PFD_ONE_SliderKuningNumber');

SliderKuning.addEventListener("input", function () {
  var degree = SliderKuning.value;
  SliderKuningNumber.value = degree;
  garisKuning.style.transform = `rotate(${degree}deg)`;
});

SliderKuningNumber.addEventListener("input", function () {
  var degree = SliderKuningNumber.value;

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
    SliderKuning.value = degree;
    SliderKuningNumber.value = degree;
    garisKuning.style.transform = `rotate(${degree}deg)`;
  }
});

/*------------- SLIDER PUTIH -------------*/
var SliderMuterPutih = document.getElementById("PFD_ONE_P");
var garisPutih = document.getElementById("PFD_ONE_L18");
var teksPutih = document.getElementById("PFD_ONE_PT");
var SliderPutihNumber = document.getElementById('PFD_ONE_SliderPutihNumber');

SliderMuterPutih.addEventListener("input", function () {
  
  var degree = SliderMuterPutih.value;
  SliderPutihNumber.value = degree
  garisPutih.style.transform = `rotate(${degree}deg)`;
  teksPutih.style.transform = `rotate(${-degree}deg)`;
});

SliderPutihNumber.addEventListener("input", function () {
  var degree = SliderPutihNumber.value;

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
    SliderMuterPutih.value = degree;
    SliderPutihNumber.value = degree;
    garisPutih.style.transform = `rotate(${degree}deg)`;
    teksPutih.style.transform = `rotate(${-degree}deg)`;
  }
});

let ilHeadingBug = document.getElementById("ilHeadingBug");
let ilHeadingBugSlider = document.getElementById("PFD_ONE_HEADING_BUG");
let ilHeadingBugNumber = document.getElementById("PFD_ONE_HEADING_BUG_NUMBER");

ilHeadingBugSlider.addEventListener("input", function () {
  headingBugUsed = true
  let degree = ilHeadingBugSlider.value;
  ilHeadingBugNumber.value = degree
  ilHeadingBug.style.transform = `rotate(${degree}deg)`;
  headingBugValue = degree
});

ilHeadingBugNumber.addEventListener("input", function () {
  headingBugUsed = true
  var degree = ilHeadingBugNumber.value;

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
    ilHeadingBugSlider.value = degree;
    ilHeadingBugNumber.value = degree;
    ilHeadingBug.style.transform = `rotate(${degree}deg)`;
    headingBugValue = degree
  }
});

