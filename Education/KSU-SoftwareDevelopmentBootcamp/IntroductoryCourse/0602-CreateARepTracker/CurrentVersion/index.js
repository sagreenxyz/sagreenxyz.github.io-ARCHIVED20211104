// Push-Ups
let pushUps;
let serializedPushUps = localStorage.getItem('pushUps')
if(serializedPushUps === null){
    pushUps = []
} else {
    pushUps = JSON.parse(serializedPushUps)
}
let newNumberOfPushUps = window.prompt('Enter your number of push-ups: ')
pushUps.push(newNumberOfPushUps)
renderChart(pushUps, 'Push-Ups')
serializedPushUps = JSON.stringify(pushUps)
localStorage.setItem('pushUps', serializedPushUps)

// Sit-Ups
let sitUps;
let serializedSitUps = localStorage.getItem('sitUps')
if(serializedSitUps === null){
    sitUps = []
} else {
    sitUps = JSON.parse(serializedSitUps)
}
let newNumberOfSitUps = window.prompt('Enter your number of sit-ups: ')
sitUps.push(newNumberOfSitUps)
renderChart(sitUps, 'Sit-Ups')
serializedSitUps = JSON.stringify(sitUps)
localStorage.setItem('sitUps', serializedSitUps)

// Squats
let squats;
let serializedSquats = localStorage.getItem('squats')
if(serializedSquats === null){
    squats = []
} else {
    squats = JSON.parse(serializedSquats)
}
let newNumberOfSquats = window.prompt('Enter your number of squats: ')
squats.push(newNumberOfSquats)
renderChart(squats, 'Squats')
serializedSquats = JSON.stringify(squats)
localStorage.setItem('squats', serializedSquats)

// Laps
let laps;
let serializedLaps = localStorage.getItem('laps')
if(serializedLaps === null){
    laps = []
} else {
    laps = JSON.parse(serializedLaps)
}
let newNumberOfLaps = window.prompt('Enter your number of laps: ')
laps.push(newNumberOfLaps)
renderChart(laps, 'Laps')
serializedLaps = JSON.stringify(laps)
localStorage.setItem('laps', serializedLaps)

