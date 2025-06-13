const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const dayOfWeek = document.getElementById("dayOfWeek");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const dayProgress = document.getElementById("dayProgress");

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function pad(n) {
  return n < 10 ? "0" + n : n;
}

function updateTime() {
  const now = new Date();

  let hrs = now.getHours();
  const mins = now.getMinutes();
  const secs = now.getSeconds();
  const ampm = hrs >= 12 ? "PM" : "AM";

  const totalSeconds = 24 * 60 * 60;
  const elapsedSeconds = hrs * 3600 + mins * 60 + secs;
  const progress = Math.floor((elapsedSeconds / totalSeconds) * 100);

  hrs = hrs % 12;
  hrs = hrs ? hrs : 12;

  day.querySelector("span").textContent = `${pad(now.getDate())},`;
  month.querySelector("span").textContent = `${pad(now.getMonth() + 1)},`;
  year.querySelector("span").textContent = `${now.getFullYear()},`;
  dayOfWeek.querySelector("span").textContent = `"${
    daysOfWeek[now.getDay()]
  }",`;
  hour.querySelector("span").textContent = `${pad(hrs)} ${ampm},`;
  minute.querySelector("span").textContent = `${pad(mins)},`;
  second.querySelector("span").textContent = `${pad(secs)},`;
  dayProgress.querySelector("span").textContent = `${progress}%,`;
}

updateTime();
setInterval(updateTime, 1000);
