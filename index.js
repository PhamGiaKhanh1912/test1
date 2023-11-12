class Stopwatch{
    Runtime = 0; 

    constructor(Runtime) {
    this.Runtime = Runtime;
    this.timeDisplay = Runtime.querySelector(".time");
    this.startBtn = Runtime.querySelector(".start");
    this.stopBtn = Runtime.querySelector(".stop");
    this.timer = null;
    this.minutes = 0 ;
    this.seconds = 0 ;

    this.StartBtn.addEventListner("click",() => {
        this.start();
    })
    this.StopBtn.addEventListner("click",() => {
        this.stop(); 
    })
}
//start function
start(){
    if(!this.timer){
        this.timer = setInterval(() =>{
            this.seconds++;
            if(this.seconds === 60){
                this,minutes++;
                this.seconds = 0; 
            }
            this.updateDisplay();
        },1000);
    }
}
stop(){
    clearInterval(this.timer);
    this.timer = null;
}
reset(){
    this.stop();
    this.minutes = 0;
    this.seconds = 0;
    this.updateDisplay()
}
pause(){
    clearInterval(this.timer);
    this.timer = null;
}
startAll(){
    if(!this.timer){
        this.timer = setInterval(()=>{
            this.seconds++;
            if(this.seconds === 60){
                this.minute++;
                this.seconds = 0;
            }
            this.updateDisplay();
        },1000)
    }
}
stopAll(){
    clearInterval(this.timer);
    this.timer = null;
}

updateDisplay(){
    this.timeDisplay.innerHTML = `${this.minutes}:${this.seconds}`;
}
}

document.addEventListener("DOMContentLoaded",function() {
    //tìm tất cả các thẻ có class là stopwatch
    const stopwatchElement = document.querySelectorAll(".stopwatch");
//tìm các btn là start, stop, reset, pause, startAll, stopAll
    const stopAllButton = document.querySelector(".stop-all");

    const startAllButton = document.querySelector(".start-all");

    const pauseButton = document.querySelector(".pause");

    // const stopwatchInstance = new Stopwatch(stopwatchElement);

    // console.log(stopwatchInstance);

    const stopwatcherInstances = Array.from(stopwatchElement).map(Runtime => new Stopwatch(Runtime));

    stopAllButton.addEventListener("click", function(){
        stopwatcherInstances.forEach(stopwatch => stopwatch.reset());
    });

    startAllButton.addEventListener("click", function(){
        stopwatcherInstances.forEach(stopwatch => stopwatch.start());
    });

    pauseButton.addEventListener("click", function(){
        stopwatcherInstances.forEach(stopwatch => stopwatch.pause());
    });
});

