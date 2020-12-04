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



//console.log(`Hours ${hours} Mins ${mins} Seconds ${seconds} Days ${Math.floor(days)}`)

