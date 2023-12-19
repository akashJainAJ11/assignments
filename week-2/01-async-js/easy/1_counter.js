function updateClock(){
    const counter = new Date();
    let timeHours = counter.getHours();
    let timeMin = counter.getMinutes();
    let timeSecond = counter.getSeconds();
    console.log(`${timeHours}:${timeMin}:${timeSecond}`)
}

function startClock() {
    updateClock(); 
    setInterval(updateClock, 1000);
  }

startClock();
