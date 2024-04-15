let timer;
let startTime;
let elapsedTime = 0;
let isPaused = false;

function formatNumber(num) {
    return String(num).padStart(2, '0');
}


function startTimer() {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateTime, 1000); // Update time every second
}

function pauseTimer() {
    clearInterval(timer);
    isPaused = true;
}

function updateTime() {
    const now = Date.now();
    elapsedTime = now - startTime;
    displayTime();
}

function displayTime() {
    const seconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    document.getElementById('timer').innerHTML = `${formatNumber(hours)}:${formatNumber(minutes % 60)}:${formatNumber(seconds % 60)}`;
}

function handleVisibilityChange() {

    if (document.hidden) {
        pauseTimer();
    } else {
        startTimer();

    }
}




document.addEventListener('visibilitychange', handleVisibilityChange);


