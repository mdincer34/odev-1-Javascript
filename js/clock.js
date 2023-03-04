let user = prompt("Adınız: ")

function showTime(){


let myName = document.querySelector("#myName")
myName.innerHTML = `${user}`

let myDate = new Date();

var days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]

let myClock = document.querySelector("#myClock")
myClock.innerHTML =`
${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()} ${days[myDate.getDay()]} 
`
}
setInterval(showTime,1000)