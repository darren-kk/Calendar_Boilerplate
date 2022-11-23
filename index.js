const currentDays = document.querySelector(".current_date_days");
const currentDate = document.querySelector(".current_date_date");
const currentTime = document.querySelector(".current_date_time");
const currentMonth = document.querySelector(".current_month_month");
const currentyears = document.querySelector(".current_month_years");

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
  let result = "";

  switch (currentDayNumber) {
    case 0:
      result = "Sun";
      break;
    case 1:
      result = "Mon";
      break;
    case 2:
      result = "Tue";
      break;  
    case 3:
      result = "Wed";
      break;  
    case 4:
      result = "Thu";
      break;  
    case 5:
      result = "Fri";
      break;  
    case 6:
      result = "Sat";
      break;  
  };
  
  return result;
};

function getCurrentMonth() {
  let currentMonthNumber = new Date().getMonth();
  let result = "";

  switch (currentMonthNumber) {
    case 0:
      result = "Jan";
      break;
    case 1:
      result = "Feb";
      break;
    case 2:
      result = "Mar";
      break;  
    case 3:
      result = "Apr";
      break;  
    case 4:
      result = "May";
      break;  
    case 5:
      result = "Jun";
      break;  
    case 6:
      result = "Jul";
      break;  
    case 7:
      result = "Aug";
      break;
    case 8:
      result = "Sep";
      break;
    case 9:
      result = "Oct";
      break;  
    case 10:
      result = "Nov";
      break;  
    case 11:
      result = "Dec";
      break;    
  };
  
  return result;
};

function getCurrentYear() {
  let result = new Date().getFullYear();
  return result;
};