const daysView = document.getElementById("days");
const hoursView = document.getElementById("hours");
const minutesView = document.getElementById("minutes");
const secondsView = document.getElementById("seconds");

const newYears = "1 Jan 2024";

function countdown() {
  const newYearDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysView.textContent = days;
  hoursView.textContent = hours;
  minutesView.textContent = minutes;
  secondsView.textContent = seconds;
}

countdown();

setInterval(countdown, 1000);
