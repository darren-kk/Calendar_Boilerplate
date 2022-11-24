const currentDays = document.querySelector(".current_date_days");
const currentDate = document.querySelector(".current_date_date");
const currentTime = document.querySelector(".current_date_time");
const currentMonth = document.querySelector(".current_month_month");
const currentyears = document.querySelector(".current_month_years");
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const fullMonths = [1, 3, 5, 7, 8, 10, 12]
const datesRow = document.querySelectorAll(".calendar_main_dates")
const table = document.querySelector(".calendar_main")
const btnRight = document.querySelector(".right");
const btnleft = document.querySelector(".left");
let nowMonth = new Date().getMonth() + 1
let nowYear = getCurrentYear();
let firstDay = new Date(`${nowYear}-${nowMonth}-1`).getDay();


currentDays.textContent = getCurrentDay();
currentDate.textContent = getCurrentDate();
currentMonth.textContent = getCurrentMonth();
currentyears.textContent = getCurrentYear();
getCurrentTime();
setInterval(getCurrentTime, 1000);
datesRow[firstDay].textContent = 1;
fillCalendar();


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

function fillCalendar() {
  if (fullMonths.includes(nowMonth)) {
    for (let i = 2; i < 32; i++) {
      firstDay = firstDay + 1
      datesRow[firstDay].textContent = i
    };
  } else if (nowMonth === 2){
    for (let i = 2; i < 29; i++) {
      firstDay = firstDay + 1
      datesRow[firstDay].textContent = i
    }; 
  } else {
    for (let i = 2; i < 31; i++) {
      firstDay = firstDay + 1
      datesRow[firstDay].textContent = i
    };
  };
}

function add() {
  for(let i = 0; i < datesRow.length; i ++) {
    datesRow[i].textContent = "";
  };
  
  nowMonth = nowMonth + 1
  
  if (nowMonth > 12) {
    nowYear = nowYear + 1;
    nowMonth = 1;
  };
  
  firstDay = new Date(`${nowYear}-${nowMonth}-1`).getDay();
  datesRow[firstDay].textContent = 1;
  
  fillCalendar();
  
  currentMonth.textContent = months[new Date(`${nowYear}-${nowMonth}-1`).getMonth()];
  currentyears.textContent = new Date(`${nowYear}-${nowMonth}-1`).getFullYear();
  currentDays.textContent = weekdays[new Date(`${nowYear}-${nowMonth}-1`).getDay()];
  currentDate.textContent = new Date(`${nowYear}-${nowMonth}-1`).getDate();
  
  if (nowMonth === new Date().getMonth() + 1) {
    currentDays.textContent = getCurrentDay();
    currentDate.textContent = getCurrentDate();
  };
}

function minus() {
  for(let i = 0; i < datesRow.length; i ++) {
    datesRow[i].textContent = "";
  };

  nowMonth = nowMonth - 1
  
  if (nowMonth < 1) {
    nowYear = nowYear - 1;
    nowMonth = 12;
  };
  
  firstDay = new Date(`${nowYear}-${nowMonth}-1`).getDay();
  datesRow[firstDay].textContent = 1;
  
  fillCalendar();
  
  currentMonth.textContent = months[new Date(`${nowYear}-${nowMonth}-1`).getMonth()];
  currentyears.textContent = new Date(`${nowYear}-${nowMonth}-1`).getFullYear();
  currentDays.textContent = weekdays[new Date(`${nowYear}-${nowMonth}-1`).getDay()];
  currentDate.textContent = new Date(`${nowYear}-${nowMonth}-1`).getDate();
  
  if (nowMonth === new Date().getMonth() + 1) {
    currentDays.textContent = getCurrentDay();
    currentDate.textContent = getCurrentDate();
  };
}

function clickDate(event) {
  if (event.target.textContent) {
    currentDays.textContent = weekdays[new Date(`${nowYear}-${nowMonth}-${event.target.textContent}`).getDay()];
    currentDate.textContent = new Date(`${nowYear}-${nowMonth}-${event.target.textContent}`).getDate();
  }
}

btnRight.addEventListener('click', add);
btnleft.addEventListener('click', minus);
table.addEventListener('click', clickDate);
