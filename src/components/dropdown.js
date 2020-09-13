import React from 'react';

    const Dropdown = ( {setTask}) => {
    

    return(
        <select name = 'priority' onChange = { setTask } >
            <option value = 'Low' > Low </option>
            <option value = 'Medium' > Medium </option>
            <option value = 'High'> High </option>
        </select>
    )
}

export default Dropdown;