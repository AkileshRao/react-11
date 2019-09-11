export default class Time {
    getTime(timeInMilliseconds) {
        const hours = parseInt(timeInMilliseconds / (1000 * 60 * 60));
        const minutes = parseInt(timeInMilliseconds / (1000 * 60));
        const seconds = parseInt(timeInMilliseconds / 1000);
        const milliseconds = timeInMilliseconds;
        return {
            hours: hours,
            minutes: minutes < 60 ? minutes : minutes % 60,
            seconds: seconds < 60 ? seconds : seconds % 60,
            milliseconds: milliseconds < 1000 ? milliseconds : milliseconds % 1000
        }
    }

    getTimeTwisted(h, m, s, ms) {
        const hours = parseInt(h) * 1000 * 60 * 60;
        const minutes = parseInt(m) * 1000 * 60;
        const seconds = parseInt(s) * 1000;
        const milliseconds = parseInt(ms);

        return hours + minutes + seconds + milliseconds;
    }
}