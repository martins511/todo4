import styles from './style.module.css';
import { StyleDeleteButton } from './Button.styled';
const Todo = ({todoItem, todoList,setTodoList}) => {
  const deleteTodo =()=>{
      setTodoList(todoList.filter((item)=>item.id!==todoItem.id))
  }
  return (
    <div>
      <div className={styles.todoitem}>
          <h3 className={styles.todoname}>{todoItem.name}</h3>
          
          <StyleDeleteButton onClick={deleteTodo}>Done</StyleDeleteButton>
      </div>
    </div>
  )
}

export default Todo
