const resolveHandler = (val) => console.log(val);
const rejectHandler = (val) => console.log(val);
function isEvenAsync(val){
    const promise = new Promise((resolve,reject)=>{
        if(Number(val)){
            resolve(val % 2 == 0)
        }else{
            reject('validation error')
        }
    })
    return promise
}

isEvenAsync(2).then(resolveHandler).catch(rejectHandler)
isEvenAsync(3).then(resolveHandler).catch(rejectHandler)
isEvenAsync('e').then(resolveHandler).catch(rejectHandler)