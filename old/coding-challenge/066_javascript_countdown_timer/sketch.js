
let ding;
let startMillis = 0;
let timeLeft = 10;
let interval = -1;
let timer;

function preload() {
    ding = loadSound('ding.mp3');
}

function formatTime(totalSeconds) {
    const minute = floor(totalSeconds / 60);
    const second = totalSeconds % 60;
    return `${nf(minute, 2)}:${nf(second, 2)}`; 
}

function getLeftMinutesFromQueryParam() {
    const params = getURLParams();
    if (params.minute) {
        timeLeft = params.minute * 60;
    }
}

function updateTime() {
    const currentTime = floor((millis() - startMillis) / 1000);
    timer.html(formatTime(timeLeft - currentTime));
    if (currentTime === timeLeft) {
        ding.play();
        clearInterval(interval);
    }
}

function setup() {
    noCanvas();
    getLeftMinutesFromQueryParam();
    startMillis = millis();
    timer = select('#timer');
    interval = setInterval(updateTime, 1000);
}
