const numbers = [4,5,2,8,4,6]
//sorted array = [2,4,4,5,6,8]

// function to find the min char index
function computeMin(array,indexToStart){
    let indexMin = indexToStart
    for(let i = indexToStart;i<array.length;i++){
        if(array[i]<array[indexMin]){
            indexMin = i
        }
    }return indexMin
}

//function to switch values in the array
function switchChars(array,i,j){
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

//function to sort the array - min to max
function sortArray(array){
    for(let i = 0;i<array.length;i++){
        let indexMin = computeMin(array,i)
        switchChars(array,i,indexMin)
        showSortedOnDom(array)
    }
}
sortArray(numbers)
console.log(numbers);

// function that get an array as argument and
// show it on the document instead on the console
function showSortedOnDom(arr){
    const ulElem = document.createElement('ul')
    document.body.appendChild(ulElem)
    ulElem.innerHTML += `<li>${arr}</li>`
}

// console.log(showSortedOnDom(numbers));