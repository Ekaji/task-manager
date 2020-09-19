import React, { useState, useEffect } from 'react';
import './App.css'
import Input from './components/Input'
import Tasks from './components/Tasks'
import './styles/Styles.css'

const App  = () => {

  const initialState = () => ( 
    JSON.parse(localStorage.getItem('todos')) || []
    )   

  const [todos, setTodo] = useState(initialState);

  const addTask = (todo) => {
    todo.id = todos.length + 1;
    todo.completed = false;
    setTodo([...todos, todo])
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

  const deleat = (id) => {
    setTodo(todos.filter(todo => todo.id !== id ))
  }

  const status = (todo) => {
    todo.completed = !todo.completed;
    console.log(todo.completed)
    setTodo([...todos])
  }
  
  return(
    <div className = 'centered' >
      <h1> Day to Day </h1>
      <Input  addTask = { addTask } />
      <Tasks  deleat = {deleat} status = {status} todos = {todos } />
    </div>
  )
}

export default App;