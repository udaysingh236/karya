import TaskList from "./TaskList";
import { getAllTasks } from "../../../services/apiTask";
import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { insertTasks } from "../taskSlice";

function AllTasks() {
  const tasks = useLoaderData();
  const dispatch = useDispatch();
  dispatch(insertTasks(tasks));
  return (
    <>
      <p className="text-center font-Pacifico text-lg">
        All your tasks, ordered by date
      </p>
      <ul className=" space-y-3">
        {tasks.map((task) => (
          <TaskList key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
}

export async function loader() {
  const task = await getAllTasks();
  return task;
}

export default AllTasks;
