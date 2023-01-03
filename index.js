window.addEventListener("DOMContentLoaded", function () {
    const Watch = document.querySelector(".watch");
    const Start = document.querySelector(".start");
    const Reset = document.querySelector(".reset");
    const Stop = document.querySelector(".stop");
    const Lap = document.querySelector(".lap");

    var seconds = 0;
    var minutes = 0;
    var hours = 0;
    var Timer;

    Start.addEventListener("click", function () {
        Start.setAttribute("disabled", "disabled");
        Timer = setInterval(
            function () {
                seconds++;
                if (seconds == 60) { seconds = 0; minutes++; };
                if (minutes == 60) { minutes = 0; hours++ };
                Watch.innerHTML = (hours < 10 ? "0" + hours : hours) + " : " + (minutes < 10 ? "0" + minutes : minutes) + " : " + (seconds < 10 ? "0" + seconds : seconds);
            }, 1000);
    });

    Stop.addEventListener("click", function () {
        Start.removeAttribute("disabled");
        clearInterval(Timer);
    });

    Reset.addEventListener("click", function () {
        seconds = 0;
        minutes = 0;
        hours = 0;
        Watch.innerHTML = "00 : 00 : 00";
        document.querySelector("ol.laps").innerHTML = "";
        setInterval(Timer);
    });

    Lap.addEventListener("click", function () {
        document.querySelector("ol.laps").innerHTML += `
        <li>${[Watch.innerHTML]}</li>`;
    });
});