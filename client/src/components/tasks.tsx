import React from 'react';
import '../styles/Styles.css';

type PropTypes = {
    todos: Array<{
        id: Number;
        completed: boolean;
        task: string;
        priority: string
    }> ;
    deleat: Function;
    status: Function
}

const Tasks = ({ todos, deleat, status }: PropTypes) => {
    interface initialaTask {
        id: Number;
        completed: boolean;
        task: string;
        priority: string
    }

    return (
      <div className="tasks-container ">
        {todos.map((todo: initialaTask) => (
          <div className={`content list ${todo.priority}`} key={`${todo.id}`}>
            <p className={`task-item ${todo.completed ? 'strikeThrough' : 'none'}`}>
              {' '}
              {todo.task}
              {' '}
            </p>
            <span className="buttonArea">
              <button type="button" onClick={() => status(todo)}> Done </button>
              <button type="button" onClick={() => deleat(todo.id)}> Deleat </button>
            </span>
          </div>
        ))}
      </div>
    );
};

export default Tasks;
