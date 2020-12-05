const p = document.querySelector('#qt')
const auth = document.querySelector('.auth')
const Time = document.querySelector('.time')
const greeting = document.querySelector('.greet')
const backGround = document.querySelector('.backGround')
const wea =document.querySelector('.wea')

const data = fetch('https://type.fit/api/quotes')
.then(res => res.json())
.then(res => llog(res));

function llog(res) {
    // p.innerHTML = `"${res[Math.floor(Math.random() * res.length)].text}"`
    let quote = res[Math.floor(Math.random() * res.length)]
    let {text, author} = quote;
    p.innerHTML = `"${quote.text}"`;
    auth.innerHTML = `- ${quote.author}`
}

let Dat = new Date();
let hours = Dat.getHours()
let minutes = Dat.getMinutes()
if (hours >= 12) {
    greeting.innerHTML = `Good evening ! it's currently`
    backGround.src = './night.jpg'
    wea.classList.add('fa-moon')
}else if(hours <= 12){
    greeting.innerHTML = `Good morning ! it's currently`
    backGround.src = './day.jpg'
    wea.classList.add('fa-sun')
}

Time.innerHTML = `${hours} : ${minutes}`

