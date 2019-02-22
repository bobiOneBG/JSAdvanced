function timer() {
    let hours = $("#hours");
    let minutes = $("#minutes");
    let seconds = $("#seconds");

    let start = $('#start-timer');
    let stop = $('#stop-timer');

    let intervalID = null;
    let sec = 0;

    start.click(funcStart);

    stop.click(() => {
        clearInterval(intervalID);
    });

    function funcStart() {
        intervalID = setInterval(increment, 1000);

        function increment() {
            sec++;

            hours.text(('0' + Math.floor(sec / 3600)).slice(-2));
            minutes.text(('0' + Math.floor(sec / 60) % 60).slice(-2));
            seconds.text(('0' + sec % 60).slice(-2));
        }

    }
}