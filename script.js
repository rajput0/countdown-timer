// let today = new Date()
// let christmas = new Date('2020-12-25')

// let seconds = (christmas - today)/1000/8600
// let mins = (christmas - today)/1000/60
// let hours = (christmas - today)/1000/60/60
// let days = (christmas - today)/1000/60/60/24


function updateScreen(){
    let today = new Date()
    let christmas = new Date('2020-12-25 5:00:00 PM')

    let seconds = Math.floor((christmas - today)/1000 % 60)
    let mins = Math.floor((christmas - today)/1000/60 % 60)
    let hours = Math.floor((christmas - today)/1000/60/60 % 24)
    let days = Math.floor((christmas - today)/1000/60/60/24)
    document.getElementById('days').innerHTML = Math.floor(days)
    document.getElementById('hours').innerHTML = Math.floor(hours)
    document.getElementById('minutes').innerHTML =Math.floor( mins)
    document.getElementById('seconds').innerHTML = Math.floor(seconds)
    console.log(days, hours, mins, seconds)
}
updateScreen()
setInterval(updateScreen, 1000)

function createSnowFlake(){
    const snow_flake = document.createElement('i');
    snow_flake.classList.add('fas');
    snow_flake.classList.add('fa-snowflake');
    snow_flake.style.left = Math.random() * (window.innerWidth) + 'px';
    let size = (Math.random() * 7 + 7)
    snow_flake.style.fontSize = size + 'px'
    snow_flake.style.animationDuration = (Math.random() * size + 3) + 's';
    snow_flake.style.opacity = (Math.random() * size) / 8;
    
    document.body.appendChild(snow_flake)
    setTimeout(()=>{snow_flake.remove()}, 7900)
}

setInterval(createSnowFlake,80)

//console.log(`Hours ${hours} Mins ${mins} Seconds ${seconds} Days ${Math.floor(days)}`)

