const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4')


let tempDate = new Date();
let tYear = tempDate.getFullYear();
let tMonth = tempDate.getMonth();
let tDate = tempDate.getDate(); 

// let futureDate = new Date(2022, 7, 20, 15, 40, 00);
const futureDate = new Date(tYear, tMonth, tDate + 10, 15, 00, 0)
let year = futureDate.getFullYear();
let hours = futureDate.getHours();
let minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
let date = futureDate.getDate();
let day = futureDate.getDay();

giveaway.textContent = `giveaway ends on ${weekdays[day]}, ${date} ${months[month]} ${year}, ${hours}:${minutes}pm`;

// futureTime
const futureTime = futureDate.getTime();


function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMin);
  let seconds = Math.floor((t % oneMin) / 1000);

  const values = [days, hours, minutes, seconds];

  function format(item) {
      if (item < 10) {
        return `0${item}`
      } else {
        return item
      }
  }

  items.forEach((item, index) => item.innerHTML = format(values[index]));

  if (t < 0) {
    clearInterval(gettingTime);
    deadline.innerHTML = `<h4 class="expired">Sorry, The giveaway has expired</h4>`
  }
}


const gettingTime = setInterval(() => {getRemainingTime()
}, 1000)

