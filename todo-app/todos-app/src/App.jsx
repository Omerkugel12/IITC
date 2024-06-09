import { useState } from 'react'

function makeId(length) { 
  let result = ''; const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
  const charactersLength = characters.length;
   for (let i = 0; i < length; i++) { 
  result += characters.charAt(Math.floor(Math.random() * charactersLength)); 
  } 
  return result; 
  }
  

const INIT_TODOS = [
  { id: '1', title: 'Learn React', isComplete: false },
  { id: '2', title: 'Build a Todo App', isComplete: false },
  { id: '3', title: 'Read JavaScript Documentation', isComplete: false },
  { id: '4', title: 'Write Unit Tests', isComplete: true },
  { id: '5', title: 'Implement Context', isComplete: true },
  { id: '6', title: 'Create Portfolio Website', isComplete: false },
  { id: '7', title: 'Learn TypeScript', isComplete: false },
  { id: '8', title: 'Refactor Codebase', isComplete: true },
  { id: '9', title: 'Optimize Performance', isComplete: false },
  { id: '10', title: 'Deploy to Production', isComplete: false }
]

// const INIT_TODOS = []


function App() {
  const [todos, setTodos] = useState(INIT_TODOS)
  const [newTodoTitle, setNewTodoTitle] =useState("")

  function addTodo(ev) {
    ev.preventDefault()
    const newTodo={
      id: makeId(),
      title: newTodoTitle,
      isComplete: false
    }
    const newTodos = [...todos]
    newTodos.push(newTodo)
    setTodos(newTodos)
    setNewTodoTitle('')
    
  }

  function removeTodo(todoId) {
    const newTodos = todos.filter((todo)=>todo.id !== todoId)
    setTodos(newTodos)
  }

  function updateComplete(todoId) {
    const updatedTodos = todos.map((todo)=>{
      if (todo.id === todoId) {
        return {
          ...todo,
          isComplete: !todo.isComplete
        }
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  function completedTodos (){
    const completedTodosArr = todos.filter((todo)=>todo.isComplete)
    return completedTodosArr.length
  }
  function activeTodos (){
    const activeTodos = todos.filter((todo)=>!todo.isComplete)
    return activeTodos.length
  }

  return (
    <main>
    <h1>Todos-app</h1>
    {todos.length === 0? <p className='warningP'>No todos available...</p> : null}
    <ul className='todosList'>
      {todos.map((todo)=>{
        return <li key={todo.id}>
          <div className='inputLabelDiv'>
          <input
              type="checkbox"
              id={todo.id}
              checked={todo.isComplete}
              onChange={() => updateComplete(todo.id)}
            />
          <label htmlFor={todo.id}>{todo.title}</label>
          </div>
          <button className='removeBtn' onClick={()=>removeTodo(todo.id)}>Delete todo</button>
        </li>
      })}
    </ul>
    <form onSubmit={addTodo} className='addTodoForm'>
      <h2>Add todo</h2>
      <label htmlFor="">add todo task:</label>
      <input type="text" 
      value={newTodoTitle}
      onChange={(ev)=>setNewTodoTitle(ev.target.value)}
      placeholder='Enter todo here'
      required/>
      <button>Add todo</button>
    </form>
    <div className='Statistics'>
      <h2>Statistics</h2>
      <div className="statisticDeatails">
      <p>Total todos: </p><span>{todos.length}</span>
      <p>Completed todos: </p><span>{completedTodos()}</span>
      <p>Active todos: </p><span>{activeTodos()}</span>
      </div>
    </div>
    </main>
  )
}

export default App
