const numbers = [1234,4324,42,21,4,233]

const numbersP = document.createElement('p')
document.body.appendChild(numbersP)
numbersP.textContent = `Array of numbers: ${numbers}`

const btnSort = document.createElement('button')
document.body.appendChild(btnSort)
btnSort.textContent = 'SORT'

const ulElem = document.createElement('ul')
document.body.appendChild(ulElem)

function computeMin(array,indexToStart){
    let indexMin = indexToStart
    for(let i = indexToStart;i<array.length;i++){
        if(array[i]<array[indexMin]){
            indexMin = i
        }
    }
    return indexMin
}

function switchChars(array,i,j){
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

function sortArray(array){
    for(let i = 0;i<array.length;i++){
        let indexMin = computeMin(array,i)
        switchChars(array,i,indexMin)
        let liElem = document.createElement('li')
        liElem.textContent = array.join(',')
        setTimeout(function(){
            ulElem.appendChild(liElem)
        },i*1000)
        
    }
}   
btnSort.addEventListener('click',()=>sortArray(numbers))

// sortArray(numbers)

// btnSort.addEventListener('click',function(){
//     for(let i = 0;i<numbers.length;i++){
//         let indexMin = computeMin(numbers,i)
//         switchChars(numbers,i,indexMin)
//         let liElem = document.createElement('li')
//         liElem.textContent = numbers.join(',')
//         setTimeout(function(){
//             ulElem.appendChild(liElem)
//         },i*1000)}
// })




