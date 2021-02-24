import "./styles.css";
import Navbar from "./components/navbar/navbar";
import TaskList from "./components/taskList/task_list";
import { useState } from "react";

const task = {
  id: 0,
  title: "New Task",
  status: "to do"
};

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [task, setTask] = useState([]);

  const addTask = (title, status) => {
    const newTask = {
      id: generateId(),
      title,
      status
    };
    setTask((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList title="to do" onAddTask={addTask} />
        <TaskList title="doing" />
        <TaskList title="done" />
      </div>
    </div>
  );
}
