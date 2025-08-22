
const clockElement = document.getElementById('clock');
const timezoneSelect = document.getElementById('timezone');

function doClock(){
    const selectedZone = timezoneSelect.value;

    const now = new Date();
    
    const options = {
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12:false
    }
    
    let timeString;
    if(selectedZone ==='local'){
        timeString = now.toLocaleTimeString(undefined,options);

    }else{
        timeString = now.toLocaleTimeString('en-US',{
            ...options,
            timeZone:selectedZone
        })
    }

    // store value with DOM
    clockElement.textContent = timeString
    
}

// update timezone secara real-time
timezoneSelect.addEventListener('change',doClock);


// update waktu secara real-time
setInterval(doClock,1000);
doClock();