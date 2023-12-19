// with setInterval
function updateClock(){
    const counter = new Date();
    let timeHours = counter.getHours();
    let timeMin = counter.getMinutes();
    let timeSecond = counter.getSeconds();
    console.log(`${timeHours}:${timeMin}:${timeSecond}`)

    setTimeout(updateClock, 1000);
}


updateClock();

// let count = 0;

// function updateCounter() {
//     console.log(count);
//     count++;

//     // Schedule the next update after 1000 milliseconds (1 second)
//     setTimeout(updateCounter, 1000);
// }

// // Start the counter
// updateCounter();