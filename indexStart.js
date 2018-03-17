// Create a class called StopWatch.
{
    /*
        Add a constructor.  In the body of the constructor
        -   Create instance variables for these 3 variables as well
            as all of the elements on the page that you're going to
            refer to in code
        -   All of the functionality of init will happen in the constructor.
        -   Add the event handlers for the start, stop and reset buttons.
            You'll have to bind(this) to each function because the keyword
            this will refer to the button (not the class) when the 
            event fires
            -- this.startButton.onclick = this.startTimer.bind(this);
    */

    /*
        Convert each function to a method.  
        -   Move it inside the class.
        -   Remove the keyword function
        -   Add this. in front of every variable and method
    */
}

// reate a variable called stopWatch

// Add an event handler to the load event of the window. 
// Use an anonymous function or an arrow function to
// set the stopWatch variable to an instance of StopWatch

var isRunning = false;
var timer = null;
var timerTime = 0;

function init()
{
    var startButton = document.querySelector('#start');
    var stopButton = document.querySelector('#stop');
    var resetButton = document.querySelector('#reset');

    startButton.onclick = startTimer;
    stopButton.onclick = stopTimer;
    resetButton.onclick = resetTimer;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(incrementTimer, 1000);
    }
}

function incrementTimer() {
    var minutes = document.querySelector('#minutes');
    var seconds = document.querySelector('#seconds');

    timerTime++;
    var numOfMinutes = Math.floor(timerTime / 60);
    var numOfSeconds = timerTime % 60;

    minutes.innerHTML = pad(numOfMinutes);
    seconds.innerHTML = pad(numOfSeconds);
}

function pad(number) {
    return (number < 10) ? '0' + number : number;
}

function stopTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
    }
}

function resetTimer() {
    stopTimer();
    timerTime = 0;

    var minutes = document.querySelector('#minutes');
    var seconds = document.querySelector('#seconds');
    minutes.innerHTML = '00';
    seconds.innerHTML = '00';
}

window.onload = init;
