import React from 'react';
import useLocalStorage from '../src/hooks/useLocalStorage'
import './App.css'
import Input from './components/input'
import Tasks from './components/tasks'
import './styles/Styles.css'

const App  = () => {

  interface taskInterface {
    id: Number;
    completed: boolean;
    task: string;
    priority: string
  }

 const [LocalStorage, setLocalStorage] = useLocalStorage< taskInterface >('todos', [] )
     
    
  type todoInterface = {
    id: Number;
    completed: boolean
  }

  const addTask = (todo: taskInterface) => {
    if(!LocalStorage) return
    try {
      todo.id = LocalStorage.length + 1;
      todo.completed = false; 
      setLocalStorage( [...LocalStorage, todo] )
    } catch (error) {
      console.log(error)
    }
  }

  const deleat = (id: Number) => {
    const item = LocalStorage
    setLocalStorage( item.filter((todo: todoInterface ) => todo.id !== id )
  )
}

  const status = (todo: todoInterface) => {
    todo.completed = !todo.completed;
    console.log(todo.completed)
    setLocalStorage([...LocalStorage])
  }
  
  return(
    <div className="centered">
      <h1> Day to Day </h1>
      <Input  addTask = { addTask } />
      <Tasks  deleat = { deleat } status = { status } todos = { LocalStorage } />
    </div>
  )
}

export default App;