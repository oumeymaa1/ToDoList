import React from "react";
import { deleteTask, doneTask } from "../../JS/Actions/listTask";
import { useDispatch } from "react-redux";
import Edit from "../Edit/Edit";
import "./task.css"
import { Button } from "react-bootstrap";

const Task = ({task}) => {
    const dispatch = useDispatch ();

    return(

        <div className="task-container">
            <span className= {task.isDone ? "done" : null}>{task.text}</span>
            <Edit task ={task}/>
            <Button onClick={() => dispatch (deleteTask(task.id))}> Delete</Button>
            <Button onClick={() => dispatch(doneTask(task.id))}>
                {task.isDone ? "UnDone" : "Done"}
            </Button>

        </div>
    );
};
export default Task;