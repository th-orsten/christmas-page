//snowflakes//
const snowflakeCount = 50; // Anzahl der Schneeflocken
const body = document.body;

for (let i = 0; i < snowflakeCount; i++) {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.textContent = "❄";
  snowflake.style.left = Math.random() * 100 + "vw"; // Zufällige Position
  snowflake.style.fontSize = Math.random() * 2 + 1 + "em"; // Zufällige Größe
  snowflake.style.animationDuration = Math.random() * 5 + 5 + "s"; // Zufällige Geschwindigkeit
  snowflake.style.animationDelay = Math.random() * 5 + "s"; // Zufällige Verzögerung
  body.appendChild(snowflake);
}
