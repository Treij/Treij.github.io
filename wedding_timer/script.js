// Set the date we're counting down to
var countDownDate = new Date("Apr 30, 2021 11:00:00").getTime();

function refreshTime() {
    // Get today's date and time
    var now = new Date().getTime();

      // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    var timeRemaining = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    document.getElementById("timer").innerHTML = "<small>Do svatby zbývá:</small> <br>" + timeRemaining;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Gratulace novomaželům <br> ♥♥♥";
    }

}

// Update the count down every 1 second
var x = setInterval(refreshTime, 1000);

refreshTime();