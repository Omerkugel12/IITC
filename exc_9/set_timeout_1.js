//TIMER
let counter = 1
let stratTimer = setInterval(function(){
    console.log(counter++)
},1000)

const btnStop = document.createElement('button')
document.body.appendChild(btnStop)
btnStop.textContent = 'STOP TIMER!'
btnStop.addEventListener('click',function(){
    clearInterval(stratTimer)
})


//////////////////////////////////////////////////////////////////////////////////


// //Execute function with setInterval
// setInterval(function(){
//     console.log('hello world');
// },5000)


//////////////////////////////////////////////////////////////////////////////////


// //Execute function with setTimeout
// setTimeout(function(){
//     console.log('hello world')
// },5000)