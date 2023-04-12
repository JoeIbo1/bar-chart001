"use strict"

window.addEventListener("load", start);

const data = [16, 31, 8, 22, 23, 17, 25, 26, 23, 7, 27, 9, 13, 14, 11, 12, 5, 28, 5, 1, 25, 0, 2, 28, 31, 10, 19, 31, 6, 8, 19, 22, 14, 0, 8, 0, 26, 4, 3, 3, 17]


function start() {
    console.log("hi java")

    displayData();
}

function displayData() {
    const bars = document.querySelectorAll(".bar");

    for(let i = 0; i < 40; i++){
        const currentBar = bars[i];
        const h = data[i] / 32*100;

        currentBar.style.height = `${h}px`;
    }
}