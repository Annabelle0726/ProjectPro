const START_BTN = document.getElementById("gameBtn");
const BALL = document.getElementById("ball");
let timer2 = null;
const girl = document.querySelector("#girl")
let s = 0;
START_BTN.addEventListener("click", startGame);

function startGame() {
    BALL.classList.remove("runningBall");
    girl.classList.add("girlSwing");
    checkIfIn();
}

function moveDomObj(t, l) {
    BALL.style.top = t + "px";
    BALL.style.left = l + "px";
}

function stepBall2() {
    const top = 140;
    const left = 180;
    if (s < 7) {
        timer2 = setTimeout(stepBall2, 200);
        if (s < 3) {
            let l = left + 40 * s;
            let t = top - 16 * s * s;
            moveDomObj(t, l);
            console.log(BALL.style.left)
        } else {
            let l = 230 + 40 * s;
            let t = -4 + 16 * s * s;
            moveDomObj(t, l);
            console.log(l, t)
        }
    } else {
        s = 0;
    }
    s++;
}

function stepBall() {
    const top = 140;
    const left = 180;
    if (s < 6) {
        timer2 = setTimeout(stepBall, 200);
        if (s < 3) {
            let l = left + 40 * s;
            let t = top - 16 * s * s;
            moveDomObj(t, l);
            console.log(BALL.style.left)
        } else {
            let l = 230 + 57 * s;
            let t = -4 + 17.5 * s * s;
            moveDomObj(t, l);
            console.log(l, t)
        }
    } else {
        s = 0;
    }
    s++;
}

function startBall() {
    timer2 = setTimeout(stepBall, 800);
}

function startBall2() {
    timer2 = setTimeout(stepBall2, 800);
}

function show(flag, delayInms) {
    return new Promise(resolve => {
        setTimeout(() => {
            if (flag) {
                alert("Congratulations you win")
            } else {
                alert("Sorry! You lose")
            }
            resolve(2);
        }, delayInms)
    })
}

function chance() {
    let flag = Math.random() * 2;
    return flag >=1;
}

async function checkIfIn() {
    let check = chance();
    if (check) {
        startBall();
        await show(check, 4000);
    } else {
        startBall2()
        await show(check, 4000);
    }
}