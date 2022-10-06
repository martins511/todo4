import React from 'react'
import styles from "./style.module.css";
import shortid from "shortid";
import { StyleButton } from "./Button.styled";
const Form = ({ todo, setTodo,  setTodoList }) => {
    const handleChange = (e) => {
        setTodo(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (todo) {
          setTodoList((prev)=>[...prev, { name: todo, id:shortid.generate()}]);
          setTodo("");
        }
      };
  return (
    <div>
      <form className={styles.todoForm} onSubmit={handleSubmit}>
        <input
          className={styles.inputForm}
          type="text"
          placeholder="Enter Todo Item"
          value={todo}
          onChange={handleChange}
        />

        <StyleButton>AddItem</StyleButton>
      </form>
    </div>
  )
}

export default Form
