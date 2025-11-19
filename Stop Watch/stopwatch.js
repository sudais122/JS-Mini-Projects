const Start = document.getElementById('start');
const Pause = document.getElementById('pause');
const Reset = document.getElementById('reset');
const Laps = document.getElementById('lap');
let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
let interval;

const update = function(){
    document.getElementById('milliseconds').innerText = String(milliseconds).padStart(3,'0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2,'0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2,'0');
    document.getElementById('hours').innerText = String(hours).padStart(2,'0');
};

const startstopwatch = function(){
    interval = setInterval(() => {
        milliseconds = milliseconds + 10;
        if (milliseconds >= 1000) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
        update();
    }, 10);
};

const pausestopwatch = function(){
    clearInterval(interval);
};

const ResetStoptwatch = function(){
    clearInterval(interval);
    interval = null;
    milliseconds ='000';
    seconds ='00';
    minutes = '00';
    hours = '00';
    update();
};

Start.addEventListener('click' , startstopwatch);
Pause.addEventListener('click' , pausestopwatch);
Reset.addEventListener('click' , ResetStoptwatch);
