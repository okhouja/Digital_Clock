function clock() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let meridian = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    meridian = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let hour = h;
  let min = m;
  let sec = s;
  let mer = meridian;
  document.getElementById("hourClockDisplay").innerText = hour;
  document.getElementById("hourClockDisplay").textContent = hour;
  document.getElementById("minClockDisplay").innerText = min;
  document.getElementById("minClockDisplay").textContent = min;
  document.getElementById("secClockDisplay").innerText = sec;
  document.getElementById("secClockDisplay").textContent = sec;
  document.getElementById("merClockDisplay").innerText = mer;
  document.getElementById("merClockDisplay").textContent = mer;

  setTimeout(clock, 1000);
}

clock();

// stop wacth design

const timerHr = document.getElementById("hr");
const timerMin = document.getElementById("min");
const timerSec = document.getElementById("sec");
const timerMilSec = document.getElementById("milSec");

let hr = 0;
let min = 0;
let sec = 0;
let milSec = 0;

let stoptime = true;

function startTimer() {
  if (stoptime == true) {
    stoptime = false;
    timerCycle();
  }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
  if (stoptime == false) {
    milSec = parseInt(milSec);
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);
    milSec = milSec + 1;
    if (milSec == 99) {
      sec = sec + 1;
      milSec = 0;
    }
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
      milSec = 0;
    }
    if (milSec < 10) {
      milSec = "0" + milSec;
    }
    if (sec < 10 || sec == 0) {
      sec = "0" + sec;
    }
    if (min < 10 || min == 0) {
      min = "0" + min;
    }
    if (hr < 10 || hr == 0) {
      hr = "0" + hr;
    }

    timerHr.innerHTML = hr;
    timerMin.innerHTML = min;
    timerSec.innerHTML = sec;
    timerMilSec.innerHTML = milSec;

    setTimeout("timerCycle()", 10);
  }
}

function resetTimer() {
  timerHr.innerHTML = "00";
  timerMin.innerHTML = "00";
  timerSec.innerHTML = "00";
  timerMilSec.innerHTML = "00";
  stoptime = true;
  hr = 0;
  sec = 0;
  min = 0;
  milSec = 0;
}
