// --- your existing task logic (add, filter, sort, etc.) remains unchanged ---

// === Theme Toggle ===
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  themeBtn.textContent = isLight ? "☀️ Light" : "🌙 Dark";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// Restore theme preference
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  themeBtn.textContent = "☀️ Light";
}

// === Draggable App Container ===
const app = document.getElementById("todoApp");
let isDragging = false;
let offsetX, offsetY;

app.addEventListener("mousedown", (e) => {
  // prevent dragging if clicking inside input/button/select
  if (["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(e.target.tagName)) return;
  isDragging = true;
  offsetX = e.clientX - app.offsetLeft;
  offsetY = e.clientY - app.offsetTop;
  app.classList.add("dragging");
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  app.style.left = `${e.clientX - offsetX}px`;
  app.style.top = `${e.clientY - offsetY}px`;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  app.classList.remove("dragging");
});
