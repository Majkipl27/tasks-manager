import Task from "./Task"
import Card from "../Ui/Card";

const TaskList = props =>{
    if (props.tasks.length === 0) {
      return (
        <Card>
          <h2>No Tasks found!</h2>
        </Card>
      );
    }

    return ( 
        <Card className="list">
        {props.tasks.map((task) => (
          <Task
            key={task.id}
            ineedid={task.id}
            title={task.title}
            date={task.date}
            arr={props.toDelete}
          />
        ))}
        </Card>
    );
}

export default TaskList;