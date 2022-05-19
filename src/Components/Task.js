import React, { useContext } from 'react'
import { CalendarContext } from '../Components/CalendarContext';

function Task({task, style}) {

    const {setTask} = useContext(CalendarContext);

    return (
        <p style={style} onClick={()=> {setTask(task)}}>{task.status}</p>
    )
}

export default Task