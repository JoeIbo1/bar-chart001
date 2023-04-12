"use strict"

// Add an event listener for the "load" event on the window object
window.addEventListener("load", start);

// Initialize an array called "data" with 40 values
const data = [16, 31, 8, 22, 23, 17, 25, 26, 23, 7, 27, 9, 13, 14, 11, 12, 5, 28, 5, 1, 25, 0, 2, 28, 31, 10, 19, 31, 6, 8, 19, 22, 14, 0, 8, 0, 26, 4, 3, 3, 17];

// Initialize a new array called "queue" by calling the "initArry" function
const queue = initArry();

// Define a function called "start" that calls the "displayData" function once immediately and then sets up an interval to call "displayData" every 1000 milliseconds (1 second).
function start() {
    setInterval(displayData, 1000);
}

// Define a function called "displayData" that updates the data for the bars, calculates the new height for each bar based on the data, and sets the "height" CSS property for each bar.
function displayData() {
    const bars = document.querySelectorAll(".bar");
    // Call the "updateQueue" function to update the "queue" array
    updateQueue();

    for(let i = 0; i < 40; i++){
        const currentBar = bars[i];
        const h = data[i] / 32*100;

        // Set the "height" CSS property for the current bar
        currentBar.style.height = `${h}px`;
    }
}

// Define a function called "getNumberOfCustomers" that returns a random integer between 0 and 31.
function getNumberOfCustomers(){
    return Math.floor(Math.random() * 32);
}

// Define a function called "initArry" that initializes the "data" array with random values and returns the "data" array.
function initArry(){
    for (let i = 0; i < 40; i++) {
        data[i] = getNumberOfCustomers();
      }
      return data;
}

// Define a function called "updateQueue" that updates the "queue" array by pushing a new random value onto the end of the array and removing the first value from the array.
function updateQueue() {
    const queueSize = getNumberOfCustomers();
    queue.push(queueSize);
    queue.shift();
}
