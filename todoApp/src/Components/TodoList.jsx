import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";
export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
        <TodoItem
          setTodos={setTodos}
          todos={todos}
          key={item.name}
          item={item}
        />
      ))}
    </div>
  );
}
