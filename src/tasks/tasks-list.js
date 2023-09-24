import { TaskItem } from "./task-item";

export function TaskList({ tasks, deleteTask, changeStatus }) {
  console.log(tasks);

  const deleteHandle = (id) => {
    deleteTask(id);
  };

  return (
    <div class="grid grid-cols-3 gap-2">
      {tasks.map((t) => (
        <TaskItem
          changeStatus={(status) => changeStatus(t.id, status)}
          task={t}
          deleteTask={() => deleteHandle(t.id)}
        ></TaskItem>
      ))}
    </div>
  );
}
