window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;

var field = document.getElementById("field");
var ball = document.getElementById("ball");

var maxX = field.clientWidth - ball.offsetWidth;
var maxY = field.clientHeight - ball.offsetHeight;

var duration = 5; // seconds
var gridSize = 50; // pixels

var start = null;

function step(timestamp)
{
    var progress, x, y;
    if(start === null) start = timestamp;
    progress = (timestamp - start) / duration / 1000; // percent
    x = progress * maxX/gridSize; // x = ƒ(t)
    y = 2 * Math.sin(x); // y = ƒ(x)
    ball.style.left = Math.min(maxX, gridSize * x) + "px";
    ball.style.bottom = maxY/2 + (gridSize * y) + "px";
    if(progress >= 1) start = null; // reset to start position
    requestAnimationFrame(step);
}

requestAnimationFrame(step);
