const startButton = document.querySelector(".start-btn");
const counter = document.querySelector(".counter__minutes");
const audio = document.querySelector(".audio");

class Timer {
    constructor(start=0,end=0){
        this.start = start;
        this.end = end;
    }
    setTime(start,end){
        this.start = start;
        this.end = end;
        this.startTimer();
    }
    timeRemaining(){
        return this.end - Date.now();
    }
    startTimer(){
        this.interval = setInterval(() => {
            this.timeRemaining();
            if(this.end - Date.now() <= 0) {
                this.stopTimer();
            }
        },1000);
    }
    stopTimer(){
        audio.play();
        clearInterval(this.interval);
    }
}

const timer = new Timer();

startButton.addEventListener("click",()=> {
    const startTime = Date.now();
    const endTime = startTime + (parseInt(counter.innerHTML) * 60) * 1000;
    timer.setTime(startTime, endTime);
});

const updateCounter = () => {
    console.log('heloo');
};