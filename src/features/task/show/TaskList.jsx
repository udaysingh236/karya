import { Link, useNavigate } from "react-router-dom";
import Button from "../../../ui/Button";
import { deleteTask, markTaskDone, openTask } from "../../../services/apiTask";
import { routeNames } from "../../../utils/RouteNames";
function TaskList({ task }) {
  const navigate = useNavigate();
  async function handleMarkdone() {
    await markTaskDone(task.id);
    navigate(".", { relative: "path" });
  }
  async function handleOpenTask() {
    await openTask(task.id);
    navigate(".", { relative: "path" });
  }
  async function handleDelete() {
    await deleteTask(task.id);
    navigate(".", { relative: "path" });
  }
  const taskDate = new Date(task.task_date);
  const currDate = new Date();
  return (
    <li className="my-1 rounded-xl border border-waikawa-gray-500 p-2 shadow-xl">
      <div className="flex justify-between">
        <Link to={`${routeNames.showATask}${task.id}`}>
          <h2 className="text-base font-medium">{task.task_name}</h2>
          <span className="text-sm">{task.task_desc}</span>
          <div className="flex items-center gap-6">
            <span className="text-xs">
              {task.every_day_task ? "Everyday" : task.task_date}
            </span>
            {task.is_open ? (
              <span className="rounded-xl bg-waikawa-gray-800 px-2 py-1 text-xs text-portage-50">
                open
              </span>
            ) : (
              <span className="rounded-xl bg-guardsman-red-400 px-2 py-1 text-xs text-portage-50">
                closed
              </span>
            )}
          </div>
        </Link>
        <div className="flex gap-4 self-center">
          {task.is_open ? (
            taskDate >= currDate ? (
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
              <>
                <Button
                  type="secondry-to"
                  to={`${routeNames.updateTask}${task.id}`}
                >
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
              </>
            )
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
          <Button type="secondry" onClick={handleDelete}>
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
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default TaskList;
