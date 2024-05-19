const resolveHandler = (val)=>setTimeout(function(){
    console.log(val);
},2000)
const rejectHandler = (val)=>setTimeout(function(){
    console.log(val);
},3000)

const successPromise = new Promise((resolve,reject)=>{
    resolve('success');
})

const failurePromise = new Promise((resolve,reject)=>{
    reject('Failure');
})


const btnSuccess = document.querySelector('.success')
const btnFail = document.querySelector('.failure')

btnSuccess.addEventListener('click',function(){
    successPromise.then(resolveHandler)
})

btnFail.addEventListener('click',function(){
    failurePromise.catch(rejectHandler)
})