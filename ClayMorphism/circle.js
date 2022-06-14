const CIRCLE_BTN = document.querySelector("#circle_btn");
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const wave1 = document.querySelector('.circle_back-1');
const wave2 = document.querySelector('.circle_back-2');
CIRCLE_BTN.addEventListener("click", function (e) {
    e.preventDefault();
    pause.classList.toggle('visibility');
    play.classList.toggle("visibility");
    CIRCLE_BTN.classList.toggle("shadow");
    wave1.classList.toggle("paused");
    wave2.classList.toggle("paused");
})