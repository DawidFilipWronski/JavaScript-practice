
const toSeconds = (ms) => {
    return (ms / 1000) % 60;
}
const toMinutes = (ms) => {
    return ms / (1000*60) % 60;
}
const toHours = (ms) => {
    return ms / (1000 * 60 * 60) % 24;
}
const toDays = (ms) => {
    return ms / (1000*60*60*24) % 365;
}
const zeroProblem = (number) => {
    return number = number < 10 ? `0${number}` : number;
}

const printTime = () => {
 const time = new Date().getTime();
 document.querySelector('.h').textContent = Math.floor(toHours(time));
 document.querySelector('.m').textContent = Math.floor(toDays(time));
}
setInterval(printTime, 1000);
