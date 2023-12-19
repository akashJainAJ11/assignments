// function updateClock(){
//     const counter = new Date();
//     let timeHours = counter.getHours();
//     let timeMin = counter.getMinutes();
//     let timeSecond = counter.getSeconds();
//     console.log(`${timeHours}:${timeMin}:${timeSecond}`)
// }

// function startClock() {
//     updateClock(); 
//     setInterval(updateClock, 1000);
//   }

// startClock();



const fs = require('fs');

function displayTime() {
    const now = new Date();

    // Format: HH:MM:SS
    const timeFormat24 = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    // Format: HH:MM:SS AM/PM
    const timeFormat12 = now.toLocaleTimeString('en-US', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    console.log(`Current Time (24-hour format): ${timeFormat24}`);
    console.log(`Current Time (12-hour format): ${timeFormat12}`);
}

// Display time initially
displayTime();

// Update and display time every second
setInterval(displayTime, 1000);
