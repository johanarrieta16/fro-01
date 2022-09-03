let timeLeft = 30;
let seconds = document.getElementById('seconds');
let timerId = setInterval(countdown, 100);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
    } else {
        seconds.innerHTML = timeLeft;
        timeLeft--;
    }
}

function doSomething() {
    alert("Time's up, offer ended!");
}