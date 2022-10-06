
import Header from "./Header";
import Form from "./Form";
import { useState } from "react";
import Todolist from "./Todolist";
import Todo from "./Todo";
function App() {
  const[todo,setTodo] =useState("");
  const[todoList,setTodoList] =useState([]);
  return (
    <div className="App">
      <Header/>
     <Form todo={todo} setTodo={setTodo} todoList ={todoList} setTodoList={setTodoList}/> 
     <Todolist setTodoList={setTodoList} todoList={todoList}/>
    </div>
  );
}

export default App;
