const DAY = document.getElementById("day");
const HOUR = document.getElementById("hour");
const MINUTE = document.getElementById("minute");
const SECOND = document.getElementById("second");
const COUNTDOWN = document.getElementById("countdown");
const TITLE = document.querySelector("[data-title]");
TITLE.innerText = "Countdown";
const COUNT_TO_DATE = new Date().setMinutes(new Date().getMinutes() + 100);
let previous = 100*60;
// function getText(time) {
//     const DAYS = Math.floor(time / 60 / 60 / 24);
//     const MINUTES = Math.floor(time / 60) % 60;
//     const HOURS = Math.floor(time / 3600 % 24);
//     const SECONDS = Math.floor(time % 60);
//     DAY.innerText = DAYS;
//     HOUR.innerText = HOURS;
//     MINUTE.innerText = MINUTES;
//     SECOND.innerText = SECONDS;
// }

function getText(time) {
    const DAYS = Math.floor(time / 60 / 60 / 24);
    const MINUTES = Math.floor(time / 60) % 60;
    const HOURS = Math.floor(time / 3600 % 24);
    const SECONDS = Math.floor(time % 60);
    DAY.innerText = DAYS;
    HOUR.innerText = HOURS;
    MINUTE.innerText = MINUTES;
    SECOND.innerText = SECONDS;
}

function show() {
    COUNTDOWN.innerText = "Time's up!"
}

setInterval(() => {
    const CURRENT_DATE = new Date();
    const GAP = Math.ceil((COUNT_TO_DATE - CURRENT_DATE) / 1000);
    if (GAP !== 0) {
        getText(previous);
    }else {
        show();
    }
    previous = GAP;
}, 1000);

