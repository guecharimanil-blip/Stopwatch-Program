const p = document.getElementById("display")
const btn = document.getElementById("theme-toggle")
const start = document.getElementById("start")
const stopb = document.getElementById("stop")
const reset = document.getElementById("reset")

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        btn.textContent = "☀️";
    } else {
        btn.textContent = "🌙";
    }
});
let startTime = 0;
let stopTime = 0;
let pausedTime = 0;
let interval = null;
let started = false;

function display() {
    let elapsedTime = Date.now() - startTime - pausedTime
    let totalseconds = Math.floor(elapsedTime / 1000)
    let hours = Math.floor(totalseconds / 3600)
    totalseconds -= 3600 * hours;
    let minutes = Math.floor(totalseconds / 60)
    totalseconds -= 60 * minutes
    let seconds = totalseconds
    p.textContent=`${hours.toString().padStart(2, 0)}:${minutes.toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)}`
}
function startF() {
    if (started) {
        return;
    }
    if (startTime === 0) {
        startTime = Date.now()
    }
    else {
        pausedTime += Date.now() - stopTime 
    }
    started = true


    interval = setInterval(display, 150)
}
function stopF() {
    stopTime = Date.now()
    started = false;
    clearInterval(interval);
    interval = null;
}

function resetF() {
    startTime = 0;
    stopTime = 0;
    pausedTime = 0;
    started = false;
    clearInterval(interval)
    interval = null;
    p.textContent = "00:00:00"
}

start.addEventListener("click", startF) 
reset.addEventListener("click", resetF)
stopb.addEventListener("click", stopF)






























