const elemP = document.querySelector('p')

function clickHandler(){
    const resolveHandler = () => {
        elemP.style.display = 'none'
    }
    const promise = new Promise((resolve,reject)=>{
        elemP.style.display = 'block'
        setTimeout(()=>{
            resolve()
        },2000)
    })
    promise.then(resolveHandler)
}