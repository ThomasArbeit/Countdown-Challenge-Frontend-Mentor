// Jours
let daysParaFront = document.getElementById('frontDays');
let daysParaBack = document.getElementById('backBottomDays');
let daysParaNextFront = document.getElementById('backTopDays');
let daysParaNextBack = document.getElementById('backDays');
let flipDays = document.getElementById('flipDays');

// Heures
let hoursParaFront = document.getElementById('frontHours');
let hoursParaBack = document.getElementById('backBottomHours');
let hoursParaNextFront = document.getElementById('backTopHours');
let hoursParaNextBack = document.getElementById('backHours');
let flipHours = document.getElementById('flipHours');

// Minutes
let minutesParaFront = document.getElementById('frontMinutes');
let minutesParaBack = document.getElementById('backBottomMinutes');
let minutesParaNextFront = document.getElementById('backTopMinutes');
let minutesParaNextBack = document.getElementById('backMinutes');
let flipMinutes = document.getElementById('flipMinutes');

// Secondes
let secondsParaFront = document.getElementById('frontSeconds');
let secondsParaBack = document.getElementById('backBottomSeconds');
let secondsParaNextFront = document.getElementById('backTopSeconds');
let secondsParaNextBack = document.getElementById('backSeconds');
let flipSeconds = document.getElementById('flipSeconds');


// Date du countdown
var countDownDate = new Date('Dec 31, 2020 23:59:59').getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000*60*60*24));
var hours = Math.floor((distance % (1000*60*60/24)) / (1000*60*60));
var minutes = Math.floor((distance % (1000*60*60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000*60)) / 1000);

console.log(seconds);
console.log(hours);

setInterval(function(){
    now = new Date().getTime();
    distance = countDownDate - now;

    days = Math.floor(distance / (1000*60*60*24));
    hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    minutes = Math.floor((distance % (1000*60*60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000*60)) / 1000);

    daysParaFront.textContent = days;
    daysParaBack.textContent = days;

    hoursParaFront.textContent = hours;
    hoursParaBack.textContent = hours;

    minutesParaFront.textContent = minutes;
    minutesParaBack.textContent = minutes;
    
    secondsParaFront.textContent = seconds;
    secondsParaBack.textContent = seconds;

    // Secondes
    setTimeout(function(){
        if (seconds == 0){
            secondsParaNextFront.textContent = 59;
            secondsParaNextBack.textContent = 59;
        } else {
            secondsParaNextFront.textContent = seconds-1;
            secondsParaNextBack.textContent = seconds-1;
        }
    },500)

    flip(flipSeconds);

    // Minutes
    if (seconds == 0){
        flip(flipMinutes);
        minutesParaNextFront.textContent = minutes-1;
        minutesParaNextBack.textContent = minutes-1;
    }

    if (minutes == 0){
        minutesParaNextFront.textContent = 59;
        minutesParaNextBack.textContent = 59;
    }

    // Hours
    if (minutes == 0 && seconds == 0){
        flip(flipHours);
        hoursParaNextFront.textContent = minutes-1;
        hoursParaNextBack.textContent = minutes-1;
    }
    
    if(hours == 0){
        hoursParaNextFront.textContent = 23;
        hoursParaNextBack.textContent = 23;
    }

    // Days
    if((minutes == 0 && seconds == 0) && hours == 0){
        flip(flipDays);
        daysParaNextFront.textContent = minutes-1;
        daysParaNextBack.textContent = minutes-1;
    }



},1000);


function flip(div){
    div.animate([
        //keyframes
        {transform: "rotateX(0deg)"},
        {transform: "rotateX(0deg)", offset: 0.6},
        {transform: "rotateX(-180deg)", offset: 1},
        {transform: "rotateX(0deg)"}
    ],
    1000)
}