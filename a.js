const data = fetch('https://type.fit/api/quotes')
.then(res => res.json())
.then(res => llog(res));

const p = document.querySelector('#qt')
function llog(res) {
    p.innerHTML = res[Math.floor(Math.random() * res.length)].text
}


