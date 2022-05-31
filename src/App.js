import { useState } from 'react';
import AddingTask from './Components/Form/AddingTask'
import TaskList from "./Components/Tasks/TaskList"
import "./index.css"

function App() {
  
   const InitialTasks = [
    //  {
    //    id: "e1",
    //    title: "Toilet Paper",
    //    amount: 94.12,
    //    date: new Date(2020, 7, 14),
    //  },
    //  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    //  {
    //    id: "e3",
    //    title: "Car Insurance",
    //    amount: 294.67,
    //    date: new Date(2021, 2, 28),
    //  },
    //  {
    //    id: "e4",
    //    title: "New Desk (Wooden)",
    //    amount: 450,
    //    date: new Date(2021, 5, 12),
    //  },
   ];

   const handleDelete = (itemId) => {
     setTasks((prevItems) => {
       const updatedTasks = prevItems.filter((item) => item.id !== itemId);
       return updatedTasks;
     });
   };

   const [tasks, setTasks] = useState(InitialTasks);

   const addTaskHandler = (task) => {
     setTasks((PrevTask) => {
       return [task, ...PrevTask];
     });
   };

   const savedTaskDataHandler = (enteredTaskData) => {
     const TaskData = {
       ...enteredTaskData,
       id: Math.random().toString(),
     };

     addTaskHandler(TaskData);
   };

  return (
    <div className="App">
      <AddingTask onSaveData={savedTaskDataHandler}/>
      <TaskList tasks={tasks} toDelete={handleDelete}/>
    </div>
  );
}

export default App;
