let timer = 0;
let counter = document.getElementById('counter');
let timerId = '';
let isCouting = false;

function start() {
    timerId = setInterval(() => {
        timer++;
    counter.innerText = timer;
    }, 1000 )
}

function reset() {
    clearInterval(timerId);
    timer = 0;
    counter.innerText = timer;
}
function pause(){
    clearInterval(timerId);
}