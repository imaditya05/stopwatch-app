const timeEl = document.querySelector(".time");
const btnStartStopEl = document.querySelector(".btn-start-stop");
const btnResetEl = document.querySelector(".btn-reset");
const playPauseEl = document.querySelector("#play-pause-icon");
const playPauseBtnEl = document.querySelector("#play-pause-btn");

let [hour, minute, second] = [0, 0, 0];
let timerOn = false;
let timerId = null;

// Main watch start function

function startTimer() {
  second++;
  if (second == 60) {
    second = 0;
    minute++;
    if (minute == 60) {
      minute = 0;
      hour++;
    }
  }
  timeEl.textContent = `${hour < 10 ? "0" + hour : hour}: ${
    minute < 10 ? "0" + minute : minute
  }: ${second < 10 ? "0" + second : second}`;
}

// Function to start the timer and run every second

function startWatch() {
  if (timerId !== null) {
    clearInterval(timerId);
  }
  timerId = setInterval(startTimer, 1000);
}

// Function to stop the timer
function stopTimer() {
  clearInterval(timerId);
}

// Function to reset the timer

function resetTimer() {
  if (playPauseEl.classList.contains("fa-pause")) {
    playPauseEl.classList.remove("fa-pause");
    playPauseEl.classList.add("fa-play");
  }

  playPauseBtnEl.style.backgroundColor = "#3cb35a";
  clearInterval(timerId);
  [hour, minute, second] = [0, 0, 0];
  timeEl.innerHTML = `00: 00: 00`;
}

// Pause Play click event

btnStartStopEl.addEventListener("click", () => {
  if (!timerOn) {
    playPauseEl.classList.remove("fa-play");
    playPauseEl.classList.add("fa-pause");
    timerOn = true;
    playPauseBtnEl.style.backgroundColor = "#FF3131";
    startWatch();
  } else {
    if (playPauseEl.classList.contains("fa-pause")) {
      playPauseEl.classList.remove("fa-pause");
      playPauseEl.classList.add("fa-play");
      playPauseBtnEl.style.backgroundColor = "#3cb35a";
    }
    stopTimer();
    timerOn = false;
  }
});
