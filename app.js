
let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId = null;
let boddy = document.querySelector("body")
let head = document.querySelector("h1")
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');

startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton.addEventListener('click', resetStopwatch);

function startStopwatch() {
  intervalId = setInterval(updateStopwatch, 50);
  startButton.disabled = true;
  stopButton.disabled = false;
}

function stopStopwatch() {
  clearInterval(intervalId);
  startButton.disabled = false;
  stopButton.disabled = true;
}

function resetStopwatch() {
  clearInterval(intervalId);
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateStopwatch();
  startButton.disabled = false;
  stopButton.disabled = true;
}

function updateStopwatch() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
  hoursElement.textContent = padZero(hours);
  minutesElement.textContent = padZero(minutes);
  secondsElement.textContent = padZero(seconds);
}

function padZero(value) {
  return (value < 10 ? '0' : '') + value;
}

