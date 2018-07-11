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
            if(this.end - Date.now() <= 0) {
                this.stopTimer();
            }
            this.updateCounter();
        },1000);
    }
    stopTimer(){
        clearInterval(this.interval);
        audio.play();
    }
    updateCounter(){ //updates DOM element
        const count = Math.floor((this.timeRemaining() / 1000));
        console.log(count);
        if(count <= 0){
            counter.innerHTML = 0;
        }else if(count < 60){
            counter.innerHTML = count;
        } else {
            counter.innerHTML = Math.floor(count / 60);
        }
        
    }
}

const timer = new Timer();

startButton.addEventListener("click",()=> {
    const startTime = Date.now();
    const endTime = startTime + (parseInt(counter.innerHTML) * 60) * 1000;
    timer.setTime(startTime, endTime);
});