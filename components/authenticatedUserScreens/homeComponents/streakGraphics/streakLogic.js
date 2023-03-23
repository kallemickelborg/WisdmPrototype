export const days = [
  { name: "Monday" },
  { name: "Tuesday" },
  { name: "Wednesday" },
  { name: "Thursday" },
  { name: "Friday" },
  { name: "Saturday" },
  { name: "Sunday" },
];

export const findStreakDaysInCurrentWeek = (day, streak) => {
  let streakDays = [];
  let currStreak = streak - 1;
  for (let i = day; i >= 0; i--) {
    streakDays.push(days[i].name);
    if (currStreak === 0 || day === 0) {
      break;
    }
    currStreak -= 1;
  }
  return streakDays;
};
