
import './App.css';
import AddTask from "./AddTask"
import ListTask from "./ListTask"
import { useEffect, useState } from 'react';

function App() {
  const [tasks,setTasks] = useState([])
   useEffect( ()=>{
    document.title =`you have ${tasks.length} pending task(s)`;})

  


    const addTask =(title)=> { 
      const newTask = [...tasks,{title}]
      setTasks(newTask)}

    const removeTask =(index)=> {
      const newTask= [...tasks]
      newTask.splice(index,1)
      setTasks(newTask)
    }  
    

    
  
  return (
    < >
      <div className='todo-container'>
        <div className='header'>TO DO APP</div>
        <div className='add-task'>
          <AddTask addTask={addTask} />
        </div>
        <div className='list-task'>
          {tasks.map((task,index)=>(
             <ListTask task={task} removeTask={removeTask} index={index} key={index}/> 
          ))}
          
        </div>

      </div>
     
    </>
  );
}

export default App;
