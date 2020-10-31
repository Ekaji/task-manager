import React from 'react';
import {useEffect, useState} from 'react'
import '../styles/Styles.css'

const Tasks = ( {todos, deleat, status} ) => {
   
    return(
        <div className = 'tasks-container '>
            {todos.map(todo => 
                (<div className = {`content list ${todo.priority}`}  key = {todo.id}> 
                    <p className = {`task-item ${todo.completed? "strikeThrough" : "none"}`}> {todo.task} </p>
                    <span className = 'buttonArea'>
                        <button onClick = {() => status(todo)} > Done </button> 
                        <button onClick = {() => deleat(todo.id) } > Deleat </button> 
                    </span>
                </div> 
                ))
                }
        </div>
    )
}

export default Tasks