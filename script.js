"use strict"

window.addEventListener("load", start);

function start() {
    console.log("hi java")

    const bars = document.querySelectorAll(".bar");

    const firstBar = bars[0];

    const h =80;

    firstBar.style.height = `${h}px`;
}