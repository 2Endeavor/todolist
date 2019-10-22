import React, {useState} from 'react';
import'./App.css'

function Todo({todo, index}) {
  return(
    <div className="todo">
      {todo.text}
    </div>
  )
}

function TodoForm({addTodo}){
  const [value, setValue] = useState("")

  const handleSubmit = e =>{
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');

  }
  return(
    <form onSubmit ={handleSubmit}>
      <input 
      type="text" 
      className="input" 
      value={value} 
      placeholder="Add Todo here"
      onChange={e=>setValue(e.target.value)}/>
    </form>
  )
}

function App(){
 const [todos, setTodos] = useState ([
   {
     id: 1,
     text: "mow the lawn",
     isComplete: false

   },
   {
    id: 2,
    text: "make dinner",
    isComplete: false

  },
  {
    id: 3,
    text: "Build really cool todo app",
    isComplete: false

  }
 ]);

 const addTodo = text =>{
   const newTodos = [...todos, {text}];
   setTodos(newTodos);
 }
 return (
   <div className="app">

     <div className="todo-list">

  {todos.map((todo, index)=>(
  
    <Todo key={index} index={index} todo={todo}/>
  ))}
  <TodoForm addTodo={addTodo}/>
      </div>
    </div>


    
 )

}

export default App;