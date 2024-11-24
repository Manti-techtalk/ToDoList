import React, { useState } from 'react';
import styles from './AddToDo.module.css';

function AddToDo({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add a new to-do" 
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Submit</button>
    </form>
  );
}

export default AddToDo;
