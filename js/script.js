const countValue = document.querySelectorAll(".countValue span");
const hoursIndex1 = document.querySelector(".hours .index1");
const hoursIndex2 = document.querySelector(".hours .index2");
const minutesIndex1 = document.querySelector(".minutes .index1");
const minutesIndex2 = document.querySelector(".minutes .index2");
const secondsIndex1 = document.querySelector(".seconds .index1");
const secondsIndex2 = document.querySelector(".seconds .index2");
const days = document.querySelector(".days");
let startTimer = "";
let CountDownDate = "";

const minutes = 60;
const seconds = 1000;
const hours = 24;
const oneMinute = seconds * minutes;
const oneHour = seconds * minutes * minutes;
const oneDay = hours * oneHour;

window.addEventListener("load", () => {
  let x = prompt("Digita a data do evento: ", "2024-01-01");
  if (x) {
    CountDownDate = x;
    countValue.forEach((span) => {
      numberTransition(span, 10, 0, 1000);
    });
    startTimer = setInterval(countDown, 1000);
  }
});

function countDown() {
  days.innerHTML = "";
  let currDate = new Date();
  let deadLineDate = new Date(CountDownDate);

  let currTime = currDate.getTime();
  let deadLineTime = deadLineDate.getTime();
  if (deadLineTime < currTime) {
    clearInterval(startTimer);
    alert("O contador chegou ao fim!");
  } else {
    let daysLeft = deadLineTime - currTime;
    let totalDaysLeft = Math.floor(daysLeft / oneDay);
    let totalHourLeft = Math.floor((daysLeft % oneDay) / oneHour);
    let totalMinutesLeft = Math.floor((daysLeft % oneHour) / oneMinute);
    let totalSecondsLeft = Math.floor((daysLeft % oneMinute) / seconds);

    console.log(
      totalDaysLeft,
      totalHourLeft,
      totalMinutesLeft,
      totalSecondsLeft
    );

    let span = document.createElement("span");
    span.className = "title";
    span.innerText = "Dias";
    days.appendChild(span);

    String(totalDaysLeft)
      .split("")
      .forEach((i) => {
        let div = document.createElement("div");
        div.className = "countValue";
        div.innerHTML = "<span>" + i + "</span>";
        days.appendChild(div);
      });

    hoursIndex1.innerHTML = zeroPad(totalHourLeft).split("")[0];
    hoursIndex2.innerHTML = zeroPad(totalHourLeft).split("")[1];

    minutesIndex1.innerHTML = zeroPad(totalMinutesLeft).split("")[0];
    minutesIndex2.innerHTML = zeroPad(totalMinutesLeft).split("")[1];

    secondsIndex1.innerHTML = zeroPad(totalSecondsLeft).split("")[0];
    secondsIndex2.innerHTML = zeroPad(totalSecondsLeft).split("")[1];
  }
}

function zeroPad(number) {
  return String(number).padStart(2, "0");
}

function numberTransition(element, start, end, duration) {
  if (start == end) return;
  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var timer = setInterval(function () {
    current += increment;
    element.innerHTML = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}
