import { useParams } from "react-router-dom";
import Button from "../../../ui/Button";
import TaskItem from "./TaskItem";

const task = {
  id: "1223",
  taskName: "Upcoming Grocery",
  createdOn: "14-01-2024",
  createdBy: "Uday",
  updatedAt: "14-01-2024",
  taskDate: "20-01-2024",
  everyDayTask: false,
  taskStatus: "open",
  description: "What we need to buy next ?",
  items: [
    {
      itemName: "Oil",
      description: "Dhara oil - 2 lit",
    },
    {
      itemName: "Anjeer",
      description: "",
    },
    {
      itemName: "Oil",
      description: "Dhara oil - 2 lit",
    },
    {
      itemName: "Anjeer",
      description: "",
    },
    {
      itemName: "Oil",
      description: "Dhara oil - 2 lit",
    },
    {
      itemName: "Anjeer",
      description: "",
    },
  ],
};

function Task() {
  const taskId = useParams();
  console.log(taskId);

  return (
    <div>
      <div className="flex items-center justify-between pr-2">
        <h2 className=" text-xl font-semibold">{task.taskName}</h2>
        <div className="flex gap-2">
          <Button type="secondry-to" to={`/tasks/update/${1223}`}>
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
          <Button type="secondry">
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
        </div>
      </div>
      <p className="text-base">{task.description}</p>
      <div className="mt-4 p-2">
        <ul className="divide-y divide-portage-700 border-b border-t border-portage-700">
          {task.items.map((item) => (
            <TaskItem item={item} />
          ))}
        </ul>
      </div>
      <div className="mt-4 flex items-center justify-evenly p-2">
        <Button type="tertiary-to" to="/">
          &larr; Back
        </Button>
        <Button type="tertiary-to" to={`/tasks/update/${1223}`}>
          Edit Task
        </Button>
        <Button type="tertiary">Mark as done</Button>
      </div>
    </div>
  );
}

export default Task;
