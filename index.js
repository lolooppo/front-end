// Get the HTML elements that display the scores for both teams home and guest
let score_1_el = document.getElementById("score-1")
let score_2_el = document.getElementById("score-2")
let score_1 = 0, score_2 = 0

// Set the starting time in seconds (e.g., 90 minutes = 90 * 60 seconds)
var startingTime = 90 * 60;

// change the score of the first screen
function add1_1(){
    score_1 += 1
    score_1_el.textContent = score_1
}
function add2_1(){
    score_1 += 2
    score_1_el.textContent = score_1
}
function add3_1(){
    score_1 += 3
    score_1_el.textContent = score_1
}
// change the score of the second screen
function add1_2(){
    score_2 += 1
    score_2_el.textContent = score_2
}
function add2_2(){
    score_2 += 2
    score_2_el.textContent = score_2
}
function add3_2(){
    score_2 += 3
    score_2_el.textContent = score_2
}
//reset both screens scores to 0
function reset_scores(){
    score_1 = 0, score_2 = 0
    startingTime = 90 * 60
    score_1_el.textContent = score_1
    score_2_el.textContent = score_2
}

// Get the timer element
var timerElement = document.getElementById("clock-section");

// Define the update function
function updateTimer() {
    // Calculate minutes and seconds
    var minutes = Math.floor(startingTime / 60);
    var seconds = startingTime % 60;

    // Add a leading zero to seconds if needed
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // Update the timer display
    timerElement.textContent = minutes + ":" + seconds;

    // Decrease the time
    startingTime--;

    // Stop the timer when it reaches 0
    if (startingTime < 0) {
        clearInterval(countdownInterval);
        timerElement.textContent = "Time's up!";
        }
    }

// Call updateTimer every second
var countdownInterval = setInterval(updateTimer, 1000);