import { useState } from "react";
import Card from "../Ui/Card"
import "./AddingTask.css"

const AddingTask = (props) =>{
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value);
    };

    const dateChangeHandler = (event) => {
      setEnteredDate(event.target.value);
    };

const submitHandler = event =>{
    event.preventDefault();

    if(enteredDate.trim().length === 0 || enteredTitle.trim().length === 0){
      alert("Title and date can't be unset.")
      return
    }

    const taskData = {
      title: enteredTitle,
      date: new Date(enteredDate),
    };

    props.onSaveData(taskData);

    setEnteredTitle("");
    setEnteredDate("");
    // console.log(enteredDate, enteredTitle)
}

    return (
      <Card>
        <h1>Task Manager</h1>
        <form onSubmit={submitHandler}>
          <input
            placeholder="Write title here"
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
            maxLength='64'
          />
          <input type="date" onChange={dateChangeHandler} value={enteredDate} />
          <button type="submit">Add Task !</button>
        </form>
      </Card>
    );
}

export default AddingTask;