import React from 'react';

  type setTaskProp = {
        setTask: Function
    }

const Dropdown = ({ setTask } : setTaskProp) => {
return (
 <select name="priority" onChange={(e) => { setTask(e); }}>
    <option value="Low"> Low </option>
    <option value="Medium"> Medium </option>
    <option value="High"> High </option>
 </select>
  );
};

export default Dropdown;
