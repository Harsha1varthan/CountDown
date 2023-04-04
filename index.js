

var targetDate = moment('2024/1/1');

var $days = $('#days');
var   $hours = $('#hours');
var   $minutes = $('minutes');
var  $seconds = $('#seconds');

setInterval(function(){
    var now = moment();
    var timeleft = moment.duration(targetDate.diff(now));
    updateClock(timeleft);
}, 10)

function updateClock(remainingTime){
    var days = Math.floor(remainingTime.asDays());
    var hrs = Math.floor(remainingTime.asHours()) % 24;
    var mins = Math.floor(remainingTime.asMinutes()) % 60;
    var secs = Math.floor(remainingTime.asSeconds()) % 60;

    $('#days').text(padNumber(days));
    $('#hours').text(padNumber(hrs));
    $('#minutes').text(padNumber(mins));
    $('#secs').text(padNumber(secs));

}

function padNumber(number){
    var formattedNum = number;
    if(number < 10){
        formattedNum = "0" + formattedNum;
    }
    return formattedNum;
}