function timeToWalk(steps, footLength, speed) {
    let totalMeters = steps * footLength;
    let breaks = Math.floor(totalMeters / 500) * 60;
    let time = totalMeters / speed / 1000;
    let sec = 3600 * time;
    let totalSec = sec + breaks;
    
    let finalHour = Math.floor(totalSec / 3600).toString().padStart(2, '0');
    let finalMin = Math.floor(totalSec / 60).toString().padStart(2, '0');
    let finalSec = Math.ceil(totalSec % 60).toString().padStart(2, '0');
    console.log(`${finalHour}:${finalMin}:${finalSec}`);

}
timeToWalk(4000, 0.60, 5)