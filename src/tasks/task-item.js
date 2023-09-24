export function TaskItem({ deleteTask, task, changeStatus }) {
  return (
    <div
      class="bg-white hover:bg-red flex justify-center shadow-lg rounded-md"
      key={task.id}
    >
      <div class="flex-1 text-center font-semibold">{task.name}</div>
      <div class="flex-1 flex flex-col justify-center align-end">
        <div>
          <input
            class="float-right"
            type="checkbox"
            checked={task.completed}
            onChange={(event) => changeStatus(event.target.checked)}
          ></input>
        </div>
      </div>
      <div class="flex-1 ">
        <button
          class="hover:bg-blue float-right bg-red-500 p-1 rounded-md text-white"
          onClick={() => deleteTask()}
        >
          delete
        </button>
      </div>
    </div>
  );
}
