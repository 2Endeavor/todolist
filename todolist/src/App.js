import React, {useState} from 'react';
import'./App.css';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';



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
 };
  const completeTodo = index =>{
    const newTodos = [...todos];
    newTodos[index].isCompleted=true;
    setTodos(newTodos);
  };
  const removeTodo = index =>{
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  };
 return (
   
   <div className="app">

     <div className="todo-list">

  {todos.map((todo, index)=>(
  
    <Todo 
    key={index} 
    index={index} 
    todo={todo} 
    completeTodo={completeTodo}
    removeTodo={removeTodo}
    />
  ))}
  <TodoForm addTodo={addTodo}/>
      </div>
    </div>


    
 )

}

export default App;