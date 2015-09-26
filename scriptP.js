// the initial tenths-of-second, seconds, and minutes
var zecsec = 0;
var seconds = 0;
var mints = 0;


var startchron = 0;
var colors  = ['#009FE5', '#17A7D3', '#2FB0C2', '#47B9B0', '#5FC29F', '#77CB8D', '#8FD37C', '#A7DC6A', '#BFE559', '#D7EE47', '#EFF736'];
var nextColor;
var x = 0;

function chronometer() {
    if(startchron == 1) {
        zecsec += 1;       // set tenths of a second
//get rid of the tenths of second!!!
        // set seconds
        if(zecsec > 9) {
            zecsec = 0;
            seconds += 1;
        }

        // set minutes
        if(seconds > 59) {
            seconds = 0;
            mints += 1;
        }

        // adds data in #showtm
        document.getElementById('showtm').innerHTML = mints+ ' : '+ seconds + ' : ' + zecsec;


        setTimeout("chronometer()", 100);

            //Tip: 1000 ms = 1 second.
            //Tip: The function is only executed once. If you need to repeat execution, use the setInterval() method.

    }
}

// starts the chronometer
function startChr() {
    startchron = 1; chronometer();
}

// stops the chronometer
function stopChr() {
    startchron = 0;
}
function resetChr() {
    zecsec = 0;  seconds = 0; mints = 0; startchron = 0;
    document.getElementById('showtm').innerHTML = mints+ ' : '+ seconds + ' : ' + zecsec;
}

function  bgchange() {
    x = (x + 1) % colors.length;
    nextColor = colors[x];
    $(".bg").css("background-color", nextColor);
}

setInterval(bgchange, 1000);
startChr();


$(window).load(function(){
    $(function(){
        $("#plus-work").tooltip({
            placement: 'bottom',
            trigger: 'hover'
        });
        $('#minus-work').tooltip({
            placement: 'bottom',
            trigger: 'hover'
        });
        $("#plus-break").tooltip({
            placement: 'bottom',
            trigger: 'hover'
        });
        $('#minus-break').tooltip({
            placement: 'bottom',
            trigger: 'hover'
        });

    });
});

//jQuery('#stop, #reset').click(function () {
//    if (this.id == 'stop') {
//        alert('Button 1 was clicked');
//    }
//    else if (this.id == 'button2') {
//        alert('Button 2 was clicked');
//    }
//});


