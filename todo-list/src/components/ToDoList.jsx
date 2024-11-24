import React from 'react';
import ToDoItem from './ToDoItem';
import styles from './ToDoList.module.css';

function ToDoList({ todos, deleteTodo }) {
  return (
    <ul className={styles.list}>
      {todos.map(todo => (
        <ToDoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}

export default ToDoList;
