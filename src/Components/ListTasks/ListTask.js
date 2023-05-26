import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Task from '../Task/task';
import { Button } from 'react-bootstrap';
import './listTask.css'

const ListTask = () => {

const list = useSelector ((state) => state.listReducer.listTasks);
const[status, setstatus] = useState ("All")
  return (
    <div >
      <div className='buttons'>
      <Button onClick={() =>setstatus("All")}>All</Button>
      <Button onClick={() =>setstatus("Done")}>Done</Button>
      <Button onClick={() =>setstatus("UnDone")}>UnDone</Button>
      </div>

        <h2>List Tasks</h2>
        { status === "Done"
        ? list 
          .filter((el)=> el.isDone === true)
          .map ((el) => <Task task ={el} key={el.id}/>)
        :status === "UnDone" 
        ? list
        .filter((el)=> el.isDone === false)
        .map ((el) => <Task task ={el} key={el.id}/>)
        

        :list.map((el) =>(
            <Task task={el} key ={el.id}/>
        ))
        }
    </div>
  )
}

export default ListTask;