/* Stopwatch */

const stopWatchTag = document.getElementsByClassName("stopWatch")[0];
const microTag = document.getElementsByClassName("micro")[0];
const startButtonTag = document.getElementsByClassName("startButton")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const restartButtonTag = document.getElementsByClassName("restartButton")[0];

let micro = 0, 
  seconds = 0,
  minutes = 0,
  hours = 0;

const startTime = () => {
  micro += 10;
  microTag.innerHTML = micro;
  if(micro === 1000){
    micro = 0;
    seconds += 1;
    if (seconds === 60) {
      seconds = 0;
      minutes += 1;
      if (minutes === 60) {
          minutes = 0;
          hours += 1;
      }
    }
  }


  const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
  const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
  const hourText = hours < 10 ? "0" + hours.toString() : hours;
  stopWatchTag.textContent = hourText + ":" + minuteText + ":" + secondText;
};

let s = 0;
let intervalId;
startButtonTag.addEventListener("click", () => {
  if(s === 0){
    clearInterval(intervalId);
    intervalId = setInterval(startTime, 10);
    s = 1;
  }
});

pauseButtonTag.addEventListener("click", () => {
  clearInterval(intervalId);
  s = 0;
});

restartButtonTag.addEventListener("click", () => {
  micro = 0,   seconds = 0, minutes = 0, hours = 0;
  stopWatchTag.textContent = "0" + hours + ":0" + minutes + ":0" + seconds;
  microTag.innerHTML = "00";
  clearInterval(intervalId);
  s = 0;
});
