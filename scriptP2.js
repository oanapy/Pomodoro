var seconds;
var minutes;
var colors  = ['#009FE5', '#17A7D3', '#2FB0C2', '#47B9B0', '#5FC29F', '#77CB8D', '#8FD37C', '#A7DC6A', '#BFE559', '#D7EE47', '#EFF736'];
var nextColor;
var x = 0;
var valueFrominput;
var currentVal;
var fieldName;
var time;
var timeinterval;
var timeArray = {};
var elemmeu = document.getElementById('showtm');

//it works with the values inserted by the user for work time
document.getElementById('submitw').addEventListener('click', function(event){
    event.preventDefault();
    valueFrominput = $('#minw').val();
    //transform the string from the input into an integer in base 10
    currentVal = parseInt(valueFrominput, 10);
    time = new Date();
    //sets the future countdown time
    time.setMinutes(time.getMinutes() + currentVal);
    //NU DECOMENTA CE E MAI JOS _ DUBLEAZA CURRENTVAL_JAVASCRIPT GOD KNOWS WHY?!
    //console.log("time dupa set minutes " + time.setMinutes(time.getMinutes() + currentVal));
    elemmeu.innerText = currentVal;
});

//The brain of the app. It makes the substraction between de time + the value written from the currentVal and the time now
// parse - transforms the time in milliseconds and the subsequent operations transform the milliseconds in secs and minutes
// the upper are memorized in an array
function getTimeRemaining(){
    var t = time - Date.now();
    seconds = Math.floor( (t/1000) % 60 );
    minutes = Math.floor( (t/1000/60) % 60 );
    timeArray = {
        'total': t,
        'minutes': minutes,
        'seconds': seconds
    };
    //console.log(timeArray);
    return timeArray;
}

//initialize the countdown - it calls the gettimeremaining
function initializeCountdown(){
    var t = getTimeRemaining();
    //stops at 00, so the clock won't show -1 after the time is up
    //it stops the setInterval function
    if(t.total < 1000){
        clearInterval(timeinterval);
    }
    //writes the numbers in the HTML code
    elemmeu.innerText = ('0' + t.minutes).slice(-2) + ' : ' + ('0' + t.seconds).slice(-2);
}

function startChr() {
    //calls the initializecountdown every second
    timeinterval = setInterval(initializeCountdown,1000);
}

function resetChr () {
    clearInterval(timeinterval);
    time = Date.now();
    elemmeu.innerText = "00 : 00";
}


// CHANGE THE COLOR OF THE BACKGROUND EVERY SECOND
function  bgchange() {
    x = (x + 1) % colors.length;
    nextColor = colors[x];
    $(".bg").css("background-color", nextColor);
}
setInterval(bgchange, 1000);