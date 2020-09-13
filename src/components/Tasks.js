import React from 'react';
import '../styles/Styles.css'
// import { Button } from '@material-ui/core'

const Tasks = ( {todos, deleat, status} ) => {

    return(
        <div className = 'tasks-container'>
            {todos.map(todo => 
                (<div className = 'content'  key = {todo.id}> <span className = {`task-item ${todo.completed? "strikeThrough" : "none"}`}> {todo.task} </span>
                <span className = 'buttonArea'>
                    <button onClick = {() => status(todo)} > Done </button> 
                    <button onClick = { () => deleat(todo.id) } > Deleat </button> 
                </span>
                
                </div> 
                ))
                }
        </div>
    )
}

export default Tasks