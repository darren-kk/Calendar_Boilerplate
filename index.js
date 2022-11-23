const currentDays = document.querySelector(".current_date_days");
const currentDate = document.querySelector(".current_date_date");
const currentTime = document.querySelector(".current_date_time");
const currentMonth = document.querySelector(".current_month_month");
const currentyears = document.querySelector(".current_month_years");
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const datesRow = document.querySelectorAll(".calendar_main_dates")

currentDays.textContent = getCurrentDay();
currentDate.textContent = getCurrentDate();
currentMonth.textContent = getCurrentMonth();
currentyears.textContent = getCurrentYear();
getCurrentTime();
setInterval(getCurrentTime, 1000);



function getCurrentTime() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  if (hours < 10) {
    hours = `0${hours}`;
  };
  if (minutes < 10) {
    minutes = `0${minutes}`;
  };
  if (seconds < 10) {
    seconds = `0${seconds}`;
  };

  currentTime.textContent = `${hours} : ${minutes} : ${seconds}`;
};

function getCurrentDate() {
  let result = new Date().getDate();
  return result;
};

function getCurrentDay() {
  let currentDayNumber = new Date().getDay();
  let result = weekdays[currentDayNumber];
  return result;
};

function getCurrentMonth() {
  let currentMonthNumber = new Date().getMonth();
  let result = months[currentMonthNumber];
  return result;
};

function getCurrentYear() {
  let result = new Date().getFullYear();
  return result;
};

function getFirstDay() {
  let firstDay = new Date("2022-11-1").getDay();
  datesRow[firstDay].textContent = 1;
  
  for (let i = 2; i < 31; i++) {
    firstDay = firstDay + 1
    datesRow[firstDay].textContent = i
  };
}

getFirstDay();