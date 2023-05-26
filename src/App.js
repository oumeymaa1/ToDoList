import React from 'react';
import './App.css';
import ListTask from './Components/ListTasks/ListTask';
import AddTask from './Components/AddTask/addTask';

function App() {
  return (
    <div className="App">
     <h1>TO DO APP</h1>
    
<ListTask/>
<AddTask/>
    </div>
  );
}

export default App;
