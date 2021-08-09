import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
function App() {
  const[showAddTask, setShowAddTask] = useState (false)
  const[tasks, setTasks] = useState(
    [
        {
            id: 1,
            text :'doctor appointment ',
            day: 'Feb 6. 3;30 pm',
            reminder: true ,
        },
        {
            id: 2,
            text :'Meeting at school ',
            day: 'Feb 5. 1;30 pm',
            reminder: true ,
        },
        {
            id: 3,
            text :'food shopping ',
            day: 'Feb 6. 3;30 pm',
            reminder: false ,
        }
    ] )

//ADD Task
const addTask=(task)=>{
  const id = Math.floor(Math.random()*1000)+1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])

}


    //delete sasks
 const deleteTask = (id) =>{
      setTasks(tasks.filter((task) => task.id !==id))
       }
//toggle reminder 
const toggleReminder = (id) =>{
  setTasks(
    tasks.map((task) => 
    task.id === id ?
    {...task, reminder: ! task.reminder} :task))
    
    
}
  return (
    
    <div className='container'>
      <Header title = "Task Tracker" color ='#172133' onAdd={()=>setShowAddTask(!showAddTask)} showAdd= {showAddTask}  />
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length >0 ?<Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder} />: ' No Tasks To Show'}
    </div>
  )
}

export default App;
