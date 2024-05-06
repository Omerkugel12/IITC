let todos //array to collect the todo's
const userInput = document.querySelector('#input')
const elemDiv = document.querySelector('#id1')

// initializing the start point
    if(localStorage.getItem('ToDoList') == null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem('ToDoList'))
    }

//function to add the user's input to the array
function addToList(){

    todos.push(userInput.value)
    saveToLocalStorage()
    userInput.value = ''
}

//function to save my array to local storage
function saveToLocalStorage(){
   let todosAsJson = JSON.stringify(todos)
   localStorage.setItem('ToDoList', todosAsJson)
}

//function to show my todo list
function showList(){
    elemDiv.innerHTML = ''
    for(let i = 0;i<todos.length;i++){
        elemDiv.innerHTML += `<li onclick="done(this)">${todos[i]}</li>`
    }
}

//function to announce that task was done
   //option one
//function done(elem){
//    let liDone = elem.style
//    if(!elem.style.backgroundColor){
//    liDone.backgroundColor = 'green'
//    }else{
//        liDone.backgroundColor = ''
//
//    }
//}


//option 2
function done(elem){
    elem.classList.toggle('green')
}


//function to delete items of the list(array) through the DOM
//function todosDeleteItem(elem){
//    let todoToDelete = elem.innerText
//    const index = todos.indexOf(todoToDelete)
//    if(index != -1){
//        todos.splice(index,1)
//    }
//    saveToLocalStorage()
//    showList()
//}

//function to clear my array in the local storage to empty array
function clearList(){
    for(let i = 0;i<todos.length;i++){
        todos = []
    }
    elemDiv.innerHTML = ''
    saveToLocalStorage()
}

