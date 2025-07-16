const playBtn = document.getElementById("play");
const resetBtn = document.getElementById("reset");
const timer = document.getElementById("timer");

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval = null;
let running = false;

function formatTime(unit) {
  return unit < 10 ? "0" + unit : unit;
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  timer.innerText = `${formatTime(hours)}.${formatTime(minutes)}.${formatTime(seconds)}`;
}

playBtn.addEventListener("click", () => {
  if (!running) {
    interval = setInterval(updateTimer, 1000);
    running = true;
    playBtn.innerText = "⏸";
  } else {
    clearInterval(interval);
    running = false;
    playBtn.innerText = "▶";
  }
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  seconds = minutes = hours = 0;
  running = false;
  timer.innerText = "00.00.00";
  playBtn.innerText = "▶";
});
