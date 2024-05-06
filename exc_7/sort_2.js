const numbers = [4,2,6,78,32,3]
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
    }
}
sortArray(numbers)
console.log(numbers);
