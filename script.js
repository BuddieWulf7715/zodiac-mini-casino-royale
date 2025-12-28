script.js

const zodiac = [
  "♈","♉","♊","♋","♌","♍",
  "♎","♏","♐","♑","♒","♓"
];

function spinSlots() {
  const a = zodiac[Math.floor(Math.random() * zodiac.length)];
  const b = zodiac[Math.floor(Math.random() * zodiac.length)];
  const c = zodiac[Math.floor(Math.random() * zodiac.length)];

  document.getElementById("slots").textContent = `${a} ${b} ${c}`;

  const result = document.getElementById("result");

  if (a === b && b === c) {
    result.textContent = "⭐ JACKPOT! The stars aligned ⭐";
  } else {
    result.textContent = "Spin again… fate is watching 👁️";
  }
}
