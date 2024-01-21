import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../ui/Button";
import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";
import { markTaskDone, openTask } from "../../../services/apiTask";
import { routeNames } from "../../../utils/RouteNames";
function Task() {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const task = useSelector(
    (state) =>
      state.task.tasks.filter((task) => task.id === parseInt(taskId))[0],
  );
  async function handleMarkdone() {
    await markTaskDone(task.id);
    navigate(-1);
  }
  async function handleOpenTask() {
    await openTask(task.id);
    navigate(-1);
  }
  return (
    <div>
      <div className="flex items-center justify-between pr-2">
        <h2 className=" text-xl font-semibold">{task.task_name}</h2>
        <div className="flex gap-2">
          <Button type="secondry-to" to={`${routeNames.updateTask}${task.id}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4 stroke-portage-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
          </Button>

          {task.is_open ? (
            <Button type="secondry" onClick={handleMarkdone}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </Button>
          ) : (
            <Button type="secondry" onClick={handleOpenTask}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
            </Button>
          )}
        </div>
      </div>
      <p className="text-base font-medium">{task.task_desc}</p>
      <div className="mt-4 p-2">
        <ul className="divide-y divide-portage-700 border-b border-t border-portage-700">
          {task.items.map((item, index) => (
            <TaskItem item={item} key={index} />
          ))}
        </ul>
      </div>
      <div className="mt-4 flex items-center justify-evenly p-2">
        <Button type="tertiary-to" to={-1}>
          &larr; Back
        </Button>
        <Button type="tertiary-to" to={`${routeNames.updateTask}${task.id}`}>
          Edit Task
        </Button>
        {task.is_open ? (
          <Button type="tertiary" onClick={handleMarkdone}>
            Mark done
          </Button>
        ) : (
          <Button type="tertiary" onClick={handleOpenTask}>
            Open Again
          </Button>
        )}
      </div>
    </div>
  );
}

export default Task;
