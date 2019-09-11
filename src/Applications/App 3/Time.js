export default class Time {
    getTime(timeInMilliSeconds) {
        const seconds = Math.floor(timeInMilliSeconds / 1000);
        const minutes = Math.floor(timeInMilliSeconds / (1000 * 60));
        const hours = Math.floor(timeInMilliSeconds / (1000 * 60 * 60));
        const milliseconds = timeInMilliSeconds;
        return {
            hours: hours,
            minutes: minutes < 60 ? minutes : minutes % 60,
            seconds: seconds < 60 ? seconds : seconds % 60,
            milliseconds: milliseconds < 1000 ? milliseconds : milliseconds % 1000
        };
    }


}