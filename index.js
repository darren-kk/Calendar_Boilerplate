const currentDayElement = document.querySelector(".current_date_days");
const currentDateElement = document.querySelector(".current_date_date");
const currentTimeElement = document.querySelector(".current_date_time");
const currentMonthElement = document.querySelector(".current_month_month");
const currentYearElement = document.querySelector(".current_month_years");
const datesRowElement = document.querySelectorAll(".calendar_main_dates")
const tableElement = document.querySelector(".calendar_main")
const calendarTableElement = document.querySelectorAll(".calendar_main_dates_tr")
const btnRightElement = document.querySelector(".right");
const btnleftElement = document.querySelector(".left");

const weekdaysList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthsList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const fullMonthsList = [1, 3, 5, 7, 8, 10, 12]

let currentMonth = new Date().getMonth() + 1
let currentYear = getCurrentYear();
let firstDay = new Date(`${currentYear}-${currentMonth}-1`).getDay();


currentDayElement.textContent = getCurrentDay();
currentDateElement.textContent = getCurrentDate();
currentMonthElement.textContent = getCurrentMonth();
currentYearElement.textContent = getCurrentYear();
datesRowElement[firstDay].textContent = 1;

fillCalendar();
getCurrentTime();
setInterval(getCurrentTime, 1000);


function getCurrentTime() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  currentTimeElement.textContent = `${hours} : ${minutes} : ${seconds}`;
}

function getCurrentDate() {
  let result = new Date().getDate();
  return result;
}

function getCurrentDay() {
  let currentDayNumber = new Date().getDay();
  let result = weekdaysList[currentDayNumber];
  return result;
}

function getCurrentMonth() {
  let currentMonthNumber = new Date().getMonth();
  let result = monthsList[currentMonthNumber];
  return result;
}

function getCurrentYear() {
  let result = new Date().getFullYear();
  return result;
}

function fillCalendar() {
  if (fullMonthsList.includes(currentMonth)) {
    for (let i = 2; i < 32; i++) {
      firstDay = firstDay + 1;
      datesRowElement[firstDay].textContent = i;
    }
  } else if (currentMonth === 2){
    for (let i = 2; i < 29; i++) {
      firstDay = firstDay + 1;
      datesRowElement[firstDay].textContent = i;
    }
  } else {
    for (let i = 2; i < 31; i++) {
      firstDay = firstDay + 1;
      datesRowElement[firstDay].textContent = i;
    }
  }
}

function handleAdd() {
  for(let i = 0; i < datesRowElement.length; i ++) {
    datesRowElement[i].textContent = "";
  }
  
  currentMonth = currentMonth + 1;
  
  if (currentMonth > 12) {
    currentYear = currentYear + 1;
    currentMonth = 1;
  }
  
  firstDay = new Date(`${currentYear}-${currentMonth}-1`).getDay();
  datesRowElement[firstDay].textContent = 1;
  
  fillCalendar();
  
  currentMonthElement.textContent = monthsList[new Date(`${currentYear}-${currentMonth}-1`).getMonth()];
  currentYearElement.textContent = new Date(`${currentYear}-${currentMonth}-1`).getFullYear();
  currentDayElement.textContent = weekdaysList[new Date(`${currentYear}-${currentMonth}-1`).getDay()];
  currentDateElement.textContent = new Date(`${currentYear}-${currentMonth}-1`).getDate();
  
  if (currentMonth === new Date().getMonth() + 1) {
    currentDayElement.textContent = getCurrentDay();
    currentDateElement.textContent = getCurrentDate();
  }
}

function handleMinus() {
  for(let i = 0; i < datesRowElement.length; i ++) {
    datesRowElement[i].textContent = "";
  };

  currentMonth = currentMonth - 1
  
  if (currentMonth < 1) {
    currentYear = currentYear - 1;
    currentMonth = 12;
  };
  
  firstDay = new Date(`${currentYear}-${currentMonth}-1`).getDay();
  datesRowElement[firstDay].textContent = 1;
  
  fillCalendar();
  
  currentMonthElement.textContent = monthsList[new Date(`${currentYear}-${currentMonth}-1`).getMonth()];
  currentYearElement.textContent = new Date(`${currentYear}-${currentMonth}-1`).getFullYear();
  currentDayElement.textContent = weekdaysList[new Date(`${currentYear}-${currentMonth}-1`).getDay()];
  currentDateElement.textContent = new Date(`${currentYear}-${currentMonth}-1`).getDate();
  
  if (currentMonth === new Date().getMonth() + 1) {
    currentDayElement.textContent = getCurrentDay();
    currentDateElement.textContent = getCurrentDate();
  };
}

function handleDate(event) {
  if (event.target.textContent) {
    currentDayElement.textContent = weekdaysList[new Date(`${currentYear}-${currentMonth}-${event.target.textContent}`).getDay()];
    currentDateElement.textContent = new Date(`${currentYear}-${currentMonth}-${event.target.textContent}`).getDate();
  }
}

for (let i = 0; i < calendarTableElement.length; i++) {
  calendarTableElement[i].addEventListener('click', handleDate);
}

btnRightElement.addEventListener('click', handleAdd);
btnleftElement.addEventListener('click', handleMinus);