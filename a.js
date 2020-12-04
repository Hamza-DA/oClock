const data = fetch('https://type.fit/api/quotes')
.then(res => res.json())
.then(res => llog(res));

const p = document.querySelector('#qt')
const Time = document.querySelector('.time')
function llog(res) {
    p.innerHTML = res[Math.floor(Math.random() * res.length)].text
}

let Dat = new Date();
let hours = Dat.getHours()
let minutes = Dat.getMinutes()
let c = Dat.()
Time.innerHTML = `${hours} : ${minutes} in ${c}`

