/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */
import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { CalendarContext } from "../Components/CalendarContext";
import { CirclePicker } from "react-color";

async function table(credentials) {
  return fetch('http://localhost:8080/event/eventdetails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function TaskForm() {

  const { date, task, setTask, saveTask, setDate, deleteTask } =  useContext(CalendarContext);
  const [status, setstatus] = useState();
  const [color, setColor] = useState("#f44336");
  const [user_id, setuser_id] = useState();
  const [doctor_id, setdoctor_id] = useState();
  const [speciality, setspeciality] = useState();
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    
    console.warn("done");
    table({
      user_id,
      doctor_id,
      status,
      date,
      speciality
    });
    window.location.href = '/scheduler'
  }

  useEffect(() => {
    if (task) {
      setstatus(task.status || "");
      setColor(task.color || "#f44336");
    }
  }, [task]);

  const closeModal = () => {
    setTask(null);
    setError(false);
  };

  const _saveTask = () => {
 
    if(status.trim().length < 1) {
        setError(true);
        return;
    }
    setError(false);

    saveTask({
      ...task,
      date: date,
      status: status,
      color: color,
    });
    setDate(date);
    closeModal();

  };

  const _deleteTask = ()=> {
    deleteTask(task.id);
    setDate(date);
    closeModal();
    setError(false);
  }

  return (
    <Modal
      isOpen={task != null}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Task Form"

    >
      <div className="task-form">
       
        <label>Doctor code</label>
        <input
         id = "doctor_id "
          name="doctor"
          type="text"
          placeholder="doctor"
          onChange={e => setdoctor_id(e.target.value)}
        />
        <label>User code</label>
        <input
        id = "user_id"
          name="user"
          type="text"
          placeholder="user"
          onChange={e => setuser_id(e.target.value)}
        />
         <label>Status</label>
        <input
          id ="status"
          name="status"
          value={status}
          onChange={e => setstatus(e.target.value)}
          type="text"
          placeholder="Status"
        />
       <label>Speciality</label>
        <input
        id = "speciality"
          name="speciality"
          type="text"
          placeholder="speciality"
          onChange={e => setspeciality(e.target.value)}
        />
        <label>Color</label>

        <div>
          <CirclePicker
            color={color}                                
            onChange={(color) => {
              setColor(color.hex);
            }}
          />
        </div>

        <div>
          <button className="button button-red" onClick={closeModal}>
            Cancel
          </button>
          {task && task.id ? (
            <button
              className="button button-orange"
              onClick={_deleteTask}
            >
              Delete
            </button>
          ) : null}
          <button
            className="button button-green"
            // onClick="_saveTask(); handleSubmit(e);"
            onClick={() => { _saveTask(); handleSubmit();}}
          >
            Save
          </button>
        </div>
        {error ? <p className="error">The name of the task is required</p> : null}
      </div>
    </Modal>
  );
}

export default TaskForm;