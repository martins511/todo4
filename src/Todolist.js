import styles from "./style.module.css";
import Todo from "./Todo";
const Todolist = ({ todoList,setTodoList }) => {
  return (
    <div>
      {todoList.map((todoItem) => (
        <Todo key={todoItem.id} todoItem={todoItem} todoList={todoList} setTodoList={setTodoList} />
      ))}
    </div>
  )
}

export default Todolist
