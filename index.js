const startButton = document.querySelector(".start-btn");
const counterMinutes = document.querySelector(".counter__minutes");

class Timer {
    constructor(start=0,end=0){
        this.start = start;
        this.end = end;
    }

    setTime(start,end){
        this.start = start;
        this.end = end;
    }

}
let timer = new Timer()

console.log(startButton);
console.log(parseInt(counterMinutes.innerHTML));


startButton.addEventListener("click",()=> {
    timer.setTime(Date.now(),Date.now() + (parseInt(counterMinutes.innerHTML) * 1000));
});