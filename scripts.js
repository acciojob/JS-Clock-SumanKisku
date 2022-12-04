//your code here
    // getting the clock hand elements
const hhand = document.querySelector(".hour-hand");
const mhand = document.querySelector(".min-hand");
const shand = document.querySelector(".second-hand");

setInterval(() =>{
    let d = new Date();
    let hour = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    let hourdeg = 30 * hour + minutes / 2 + 90;
    let mindeg = 6 * minutes + 90;
    let secondsdeg = 6 * seconds + 90;
    hhand.style.transform = `rotate(${hourdeg}deg)`;
    mhand.style.transform = `rotate(${mindeg}deg)`;
    shand.style.transform = `rotate(${secondsdeg}deg)`;
}, 1000)

