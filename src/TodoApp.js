import React from 'react'
import Form from './Form'
import Header from './Header'
import Todolist from './Todolist'
import { useState } from 'react'
const TodoApp = () => {
    const[todo,setTodo] =useState("");
    const[todoList,setTodoList] =useState([]);
  return (
    <div>
      <Header/>
     <Form todo={todo} setTodo={setTodo} todoList ={todoList} setTodoList={setTodoList}/> 
     <Todolist setTodoList={setTodoList} todoList={todoList}/>
    </div>
  )
}

export default TodoApp
