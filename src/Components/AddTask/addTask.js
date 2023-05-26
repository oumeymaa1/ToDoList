import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {addTask} from '../../JS/Actions/listTask'
import "./addTask.css"
const AddTask = () => {
    const [text, setText] = useState ("")
    const dispatch = useDispatch ();
    const handleAdd = (e) => {
        e.preventDefault ();
        if (text) {
            dispatch (addTask ({ id: Math.random (), text, isDone: false}));
            setText ("");
        }
        else {
          alert ("Cannot add an empty text");
        }
    }
  return (
    <div>
        <h2>Add Task</h2>
    <Form onSubmit={handleAdd} className ='add-task-container'>
        <Form.Control
        className='input-task'
        type="text" 
        placeholder="enter text title ..." 
        onChange={(e) => setText(e.target.value)}
        value={text }
        />
        <Button variant="primary" onClick={handleAdd}>
        Add
      </Button>
    </Form>
    </div>
  );
};

export default AddTask;