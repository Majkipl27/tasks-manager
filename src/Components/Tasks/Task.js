import TaskDate from "./TaskDate";
import { useState } from "react";
import "./Task.css"

const Task = props =>{
  const [isChecked, setIsChecked] = useState(false);

  const deleteHandler = () =>{
    props.arr(props.ineedid)
  }

  const handleChange = (event) =>{
    event.target.checked ? setIsChecked(true) : setIsChecked(false);
  }

    return (
      <div
        className={`${"task"} ${isChecked && "completed"}`}>
        <TaskDate date={props.date} />
        <div className="title">
          <h2>{props.title}</h2>
        </div>
        <div className="buttons">
          <input type="checkbox" id="checkingboxing" onChange={handleChange} />
          <button onClick={deleteHandler}>&Chi;</button>
        </div>
      </div>
    );
}

export default Task;