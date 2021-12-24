import React, { useState, ChangeEvent } from 'react';
import Dropdown from './dropdown';
import '../styles/Styles.css';

type addTaskProps = {
    addTask: Function
}

const Input = ({ addTask } : addTaskProps) => {
    type initialaTask = {
        id: number;
        completed: boolean;
        task: string;
        priority: string
    };

    const initialaState = {
      id: 0, completed: false, task: '', priority: '',
    };

    const [newTask, setNewTask] = useState<initialaTask>(initialaState);

    const setTask = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setNewTask({ ...newTask, [name]: value });
    };

    const handleSubmit = (
      // e: MouseEventHandler<HTMLButtonElement>
    ) => {
      // e.preventDefault()
      if (!newTask?.task || !newTask?.priority) return;
      addTask(newTask);
      setNewTask(initialaState);
    };

    return (
      <form className="form-input" onSubmit={handleSubmit}>
        <input value={newTask?.task} className="taskInput" placeholder="New Task" type="text" name="task" onChange={setTask} />
        <Dropdown setTask={setTask} />
        <div className="m-button">
          <button type="button" color="secondary" onClick={handleSubmit}> Add </button>
        </div>
      </form>
    );
};

export default Input;
