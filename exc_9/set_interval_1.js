const btnStart = document.createElement('button')
btnStart.innerText = 'START!'
document.body.appendChild(btnStart)
btnStart.style.backgroundColor = 'green'

const btnStop = document.createElement('button')
btnStop.innerText = 'STOP!'
document.body.appendChild(btnStop)
btnStop.style.backgroundColor = 'red'

const counterP = document.createElement('p')
document.body.appendChild(counterP)

let startTimer;
let counter = 0;
btnStart.addEventListener('click',()=>{
    startTimer = setInterval(function(){
        counterP.textContent = `Seconds before window was opened: ${counter++} seconds`
    },1000)
})

btnStop.addEventListener('click',()=>{
    clearInterval(startTimer)
    counterP.innerText = `Timer topped after ${counter} seconds`
})