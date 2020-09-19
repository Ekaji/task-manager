import React, {useState} from 'react';
import Dropdown from './dropdown'
import '../styles/Styles.css'

const Input = ({addTask}) => {

    const initialaTask = { id: null, completed: false,  task: '', priority: 'low'};
    const [newTask, setNewTask] = useState(initialaTask)

    const setTask = (e) => {
    let { name, value } = e.target;
        setNewTask({...newTask, [name] : value})
    } 

    const handleSubmit = (e) => {
        e.preventDefault()
        if ( !newTask.task || !newTask.priority ) return
        addTask(newTask)
        setNewTask(initialaTask)
    }
 
    return(
        <form className = 'form-input' onSubmit = { handleSubmit } >
         <input value = {newTask.task} className = 'taskInput' placeholder='New Task' type='text' name = 'task' onChange = { setTask } />
            <Dropdown setTask = { setTask } />
            <div className = 'm-button'>
                <button variant="outlined" color="secondary" onClick = {handleSubmit} > Add </button>
            </div>
        </form>
    )
}

export default Input;