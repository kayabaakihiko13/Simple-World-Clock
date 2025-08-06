function doClock(){
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let timeZone = "WIB"
    hours = hours < 10 ? '0' + hours: hours;
    minutes = minutes <10 ? '0' + minutes:minutes;
    seconds = seconds <10 ? '0' + seconds:seconds;

    const timeString = `${hours}:${minutes}:${seconds} ${timeZone}`;
    document.getElementById('clock').textContent = timeString; 

}
doClock();
setInterval(doClock,1000);