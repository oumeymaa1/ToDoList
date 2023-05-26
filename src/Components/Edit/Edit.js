import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editTask } from '../../JS/Actions/listTask';
import { Button, Form, Modal } from 'react-bootstrap';

const Edit = ({task}) => {
    const [show,setShow] = useState (false);
    const [newTask,setNewTask] = useState(task.text);
    const dispatch = useDispatch();

    const handleClose = () => setShow (false);
    const handleShow = () => setShow (true);

    const handleEdit = () =>{
        dispatch (editTask(task.id, newTask));
        handleClose ();
    }
  return (
    <div>
  <Button variant="primary" onClick={handleShow}>
    Edit      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <Form.Control 
        type="text" 
        placeholder="Edit task ..."
        value= {newTask}
        onChange={(e) =>setNewTask(e.target.value)}

         />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Edit;