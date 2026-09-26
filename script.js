// =========================
// ELEMENTS
// =========================

const monthElement = document.getElementById("month");

const yearElement = document.getElementById("year");

const daysElement = document.getElementById("days");

const previousButton = document.getElementById("previousMonth");

const nextButton = document.getElementById("nextMonth");

const todayButton = document.getElementById("todayButton");

// =========================
// TODAY
// =========================

const today = new Date();

// =========================
// CURRENT CALENDAR POSITION
// =========================

let currentMonth = today.getMonth();

let currentYear = today.getFullYear();

// =========================
// MONTH NAMES
// =========================

const monthNames = [
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

// =========================
// CREATE CALENDAR
// =========================

function createCalendar(month, year) {
  // Clear previous days

  daysElement.innerHTML = "";

  // Update month and year

  monthElement.textContent = monthNames[month];

  yearElement.textContent = year;

  // Find the first day of the month

  const firstDay = new Date(year, month, 1).getDay();

  // Find how many days the month has

  const numberOfDays = new Date(year, month + 1, 0).getDate();

  // =========================
  // EMPTY SPACES
  // =========================

  for (let i = 0; i < firstDay; i++) {
    const emptyDay = document.createElement("span");

    emptyDay.classList.add("empty");

    daysElement.appendChild(emptyDay);
  }

  // =========================
  // CREATE DAYS
  // =========================

  for (let day = 1; day <= numberOfDays; day++) {
    const dayElement = document.createElement("span");

    dayElement.textContent = day;

    // Check if this is today's date

    if (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      dayElement.classList.add("today");
    }

    daysElement.appendChild(dayElement);
  }
}

// =========================
// PREVIOUS MONTH
// =========================

previousButton.addEventListener("click", () => {
  currentMonth--;

  if (currentMonth < 0) {
    currentMonth = 11;

    currentYear--;
  }

  createCalendar(currentMonth, currentYear);
});

// =========================
// NEXT MONTH
// =========================

nextButton.addEventListener("click", () => {
  currentMonth++;

  if (currentMonth > 11) {
    currentMonth = 0;

    currentYear++;
  }

  createCalendar(currentMonth, currentYear);
});

// =========================
// GO BACK TO TODAY
// =========================

todayButton.addEventListener("click", () => {
  currentMonth = today.getMonth();

  currentYear = today.getFullYear();

  createCalendar(currentMonth, currentYear);
});

// =========================
// START CALENDAR
// =========================

createCalendar(currentMonth, currentYear);
