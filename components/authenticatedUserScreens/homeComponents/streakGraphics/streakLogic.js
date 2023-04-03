const moment = require("moment");

const today = moment();

export const currentDayName = today.format("dddd");
export const currentDayValue = today.day() === 0 ? 6 : today.day() - 1;

const getDays = () => {
  const dayArray = [];
  let currentDay =
    currentDayValue === 6
      ? today.startOf("week").subtract(6, "day")
      : today.startOf("week").add(1, "day");
  for (let i = 0; i < 7; i++) {
    dayArray.push({
      day: currentDay.format("dddd"),
      dayAbbreviated: currentDay.locale("en-gb").format("ddd"),
      date: currentDay.format("DD"),
      month: currentDay.format("MMMM"),
    });
    currentDay.add(1, "day");
  }
  return dayArray;
};

export const days = getDays();

export const findStreakDaysInCurrentWeek = (day, streak) => {
  let streakDays = [];
  let currStreak = streak - 1;
  if (currStreak < 0) {
    return streakDays;
  }
  for (let i = day; i >= 0; i--) {
    streakDays.push(days[i].day);
    if (currStreak === 0 || day === 0) {
      break;
    }
    currStreak -= 1;
  }
  return streakDays;
};
