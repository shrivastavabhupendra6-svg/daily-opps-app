document.getElementById("date").innerText = new Date()r.toDateString();
const todayKey = new Date().toDateString();
let savedData = JSON.parse(localStorage.getItem(todayKey)) || {};
const SOP = {
  "Hydration": "Drink 500ml water immediately after waking.",
  "Supplements": "Take morning supplements stack.",
  "Workout": "Follow strength training SOP.",
  "Shower": "Cold/warm shower after workout.",
  "Breakfast": "Protein-rich breakfast.",
  "Deep Work Session": "90 min distraction-free work.",
  "Admin Tasks": "Emails, planning, logistics.",
  "Reading": "Skill development reading.",
  "Squash / Strength Training": "Training block execution.",
  "Skincare": "Night skincare routine.",
  "Journal": "Write daily reflection.",
  "Plan Tomorrow": "Prepare next day plan.",
  "Sleep on time": "Sleep before target bedtime."
};
const currentHour = new Date().getHours();
function getCurrentBlockIndex() {
  if (currentHour < 9) return 0;
  if (currentHour < 14) return 1;
  if (currentHour < 18) return 2;
  if (currentHour < 21) return 3;
  return 4;
