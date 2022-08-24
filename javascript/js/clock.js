const clock = document.querySelector("h2#clock");

function sayHello(){
    console.log("hello");
}
//setInterval(sayHello, 5000);
//clock.innerText = "fdf";

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();//website가 load되자마자 getClock()을 실행하고 또 매초마다 다시 실행되도록(아래 코드)
setInterval(getClock, 1000);