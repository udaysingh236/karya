import { useState } from "react";
import Button from "../../../ui/Button";
import { useNavigate } from "react-router-dom";

function CreateTaskHome() {
  const [taskName, setTaskName] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    console.log(taskName);
    navigate("/task/new");
  }

  return (
    <form
      className="overflow-hidden rounded-lg border border-portage-400 bg-portage-50 p-1 "
      onSubmit={handleSubmit}
    >
      <div className="flex items-center">
        <input
          className="w-full bg-portage-50 p-2 text-xl focus:outline-none focus-visible:outline-none"
          type="text"
          name="addTask"
          placeholder="Add Task"
          value={taskName}
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
        />
        <Button type="primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </Button>
      </div>
    </form>
  );
}

export default CreateTaskHome;
