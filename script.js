
let eventDate = new Date('2020-12-25 5:00:00 PM')
function updateScreen(){
    let today = new Date()

    let seconds = Math.floor((eventDate - today)/1000 % 60)
    let mins = Math.floor((eventDate - today)/1000/60 % 60)
    let hours = Math.floor((eventDate - today)/1000/60/60 % 24)
    let days = Math.floor((eventDate - today)/1000/60/60/24)
    document.getElementById('days').innerHTML = Math.floor(days)
    document.getElementById('hours').innerHTML = Math.floor(hours)
    document.getElementById('minutes').innerHTML =Math.floor(mins)
    document.getElementById('seconds').innerHTML = Math.floor(seconds)
    // console.log(days, hours, mins, seconds)
}
updateScreen()
setInterval(updateScreen, 1000)

function createSnowFlake(){
    const snow_flake = document.createElement('i');
    snow_flake.classList.add('fas');
    snow_flake.classList.add('fa-snowflake');
    snow_flake.style.left = Math.random() * (window.innerWidth) + 'px';

    let size = (Math.random() * 10 + 5)
    snow_flake.style.fontSize = size + 'px'
    snow_flake.style.animationDuration = (Math.random() * size + 3) + 's';
    snow_flake.style.opacity = (Math.random() * size) / 10;
    
    document.body.appendChild(snow_flake)
    setTimeout(()=>{snow_flake.remove()}, 8000)
}

setInterval(createSnowFlake,100)

function changeEvent(){
    document.getElementById('no-time-entered').style.display = 'none';
    document.getElementById('timer-div').style.display = 'flex';

    let event = (document.getElementById('addEvent').value).toUpperCase()
    let time = document.getElementById('addTime').value
    //console.log(time)
    if(time=="") {
        document.getElementById('no-time-entered').style.display = 'initial';
        // document.getElementById('no-time-entered').style.textAlign = 'center';
        document.getElementById('timer-div').style.display = 'none';
    }
    if(event=="") event = "YOUR EVENT"
    document.getElementById('event-name').innerHTML = event
    eventDate = new Date(time)
    console.log(event, time)
    
}

//console.log(`Hours ${hours} Mins ${mins} Seconds ${seconds} Days ${Math.floor(days)}`)

