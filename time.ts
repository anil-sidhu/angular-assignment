/**
*
* getTime using TypeScript
*
*/

class Time {
    constructor() {
    }
    getTime() {
        let d = new Date;
        var hours = d.getHours()
        var ampm = hours >= 12 ? 'PM' : 'PM';
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var dayName = days[d.getDay()];
        return `Today is : ${dayName}
  current time is : ${d.getHours()}${ampm} : ${d.getMinutes()}  : ${d.getSeconds()}`
    }
}
let t1 = new Time()
console.warn(t1.getTime())

