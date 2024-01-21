import TaskList from "./TaskList";
import { getUpcomingOpenTasks } from "../../../services/apiTask";
import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { insertTasks } from "../taskSlice";

function SearchTask() {
  const tasks = useLoaderData();
  const dispatch = useDispatch();
  dispatch(insertTasks(tasks));
  return (
    <ul className=" space-y-3">
      {tasks.map((task) => (
        <TaskList key={task.id} task={task} />
      ))}
    </ul>
  );
}

export async function loader() {
  const task = await getUpcomingOpenTasks();
  return task;
}

export default SearchTask;
