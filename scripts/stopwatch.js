let timer;         // untuk menyimpan setInterval
let startTime;     // waktu mulai
let elapsedTime = 0; 
let running = false;

function updateDisplay() {
  let time = Date.now() - startTime + elapsedTime;

  let ms = Math.floor((time % 1000) / 10);               // 0–99
  let sec = Math.floor((time / 1000) % 60);              // 0–59
  let min = Math.floor((time / (1000 * 60)) % 60);       // 0–59

  document.getElementById("display").textContent =
    String(min).padStart(2, '0') + ":" +
    String(sec).padStart(2, '0') + ":" +
    String(ms).padStart(2, '0');
}

function start() {
  if (!running) {
    running = true;
    startTime = Date.now();
    timer = setInterval(updateDisplay, 10);
  }
}

function stop() {
  if (running) {
    running = false;
    clearInterval(timer);
    elapsedTime += Date.now() - startTime;
  }
}

function reset() {
  running = false;
  clearInterval(timer);
  elapsedTime = 0;
  document.getElementById("display").textContent = "00:00:00";
}
