function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', convertFromDays);
    document.getElementById('hoursBtn').addEventListener('click', convertFromHours);
    document.getElementById('minutesBtn').addEventListener('click', convertFromMinutes);
    document.getElementById('secondsBtn').addEventListener('click', convertFromSeconds);


    function convertFromDays() {
        let daysCnt = +days.value;

        hours.value = daysCnt * 24;
        minutes.value = daysCnt * 1440;
        seconds.value = daysCnt * 86400;
    }

    function convertFromHours() {
        let hoursCnt = +hours.value;

        days.value = hoursCnt / 24;
        minutes.value = hoursCnt * 60;
        seconds.value = hoursCnt * 3600;
    }

    function convertFromMinutes() {
        let minutesCnt = +minutes.value;

        days.value = minutesCnt / 1440;
        hours.value = minutesCnt / 60;
        seconds.value = minutesCnt * 60;
    }

    function convertFromSeconds() {
        let secondsCnt = seconds.value;

        days.value = secondsCnt / 86400;
        hours.value = secondsCnt / 3600;
        minutes.value = secondsCnt / 60;
    }
}