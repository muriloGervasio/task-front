import { useEffect, useState } from "react";
import "./App.css";
import { TaskList } from "./tasks/tasks-list";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/task").then((res) => {
      setTasks(res.data);
    });
  }, []);

  const deleteTask = async (id) => {
    await axios.delete("http://localhost:3001/task/" + id);
    setTasks([...tasks.filter((t) => t.id !== id)]);
  };

  const changeStatus = async (id, status) => {
    await axios.put("http://localhost:3001/task/" + id, { completed: status });
    setTasks([
      ...tasks.map((t) => (t.id === id ? { ...t, completed: status } : t)),
    ]);
  };

  const [name, setName] = useState("");

  const submit = async () => {
    const { data: task } = await axios.post("http://localhost:3001/task", {
      name: name,
    });

    setTasks([...tasks, task]);
  };

  return (
    <div class="flex flex-col">
      <h1 class="text-center  text-lg font-bold">TASKS</h1>
      <div class="flex justify-center">
        <div class="bg-white p-5 rounded shadow-lg">
          <input
            class="bg-blue-50 border-solid mr-2 "
            placeholder="Type to add task..."
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
          <button
            class="bg-blue-500 rounded-sm p-1 text-white"
            type="submit"
            onClick={() => submit()}
          >
            ADD TASK
          </button>
        </div>
      </div>
      <div class="mt-2">
        <TaskList
          changeStatus={changeStatus}
          deleteTask={deleteTask}
          tasks={tasks}
        ></TaskList>
      </div>
    </div>
  );
}

export default App;
