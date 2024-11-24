import React from 'react';
import styles from './ToDoItem.module.css';

function ToDoItem({ todo, deleteTodo }) {
  return (
    <li className={styles.item}>
      {todo.text}
      <button onClick={() => deleteTodo(todo.id)} className={styles.button}>Delete</button>
    </li>
  );
}

export default ToDoItem;
