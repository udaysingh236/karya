import { useState } from "react";
import { Form, redirect, useNavigate, useParams } from "react-router-dom";
import Input from "../../../ui/Input";
import { useSelector } from "react-redux";
import { updateTaskInDb } from "../../../services/apiTask";
import { routeNames } from "../../../utils/RouteNames";

function UpdateTask() {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const task = useSelector(
    (state) =>
      state.task.tasks.filter((task) => task.id === parseInt(taskId))[0],
  );
  const [taskItems, setTaskItems] = useState(task.items);
  const [checked, setChecked] = useState(task.every_day_task);
  function handleItemNameFormChange(e, index) {
    setTaskItems((items) =>
      items.map((item, i) =>
        i === index ? { ...item, itemName: e.target.value } : item,
      ),
    );
  }
  function handledescriptionFormChange(e, index) {
    setTaskItems((items) =>
      items.map((item, i) =>
        i === index ? { ...item, description: e.target.value } : item,
      ),
    );
  }

  function removeItem(index) {
    setTaskItems((items) => {
      return items.filter((_, i) => i !== index);
    });
  }

  function addItem() {
    setTaskItems((items) =>
      items.concat({
        itemName: "",
        description: "",
      }),
    );
  }

  function handleCheckChange() {
    setChecked(!checked);
  }
  return (
    <div className="p-2">
      <h2 className="text-center text-xl font-medium">
        Soemthing got missed last time ?
      </h2>
      <Form className="mt-4 space-y-4" method="PATCH">
        <div>
          <label htmlFor="taskName" className="text-lg">
            Task Name
          </label>
          <input
            className="w-full rounded-lg p-1 text-lg shadow-md focus:outline-none focus-visible:outline-none"
            type="text"
            name="task_name"
            id="taskName"
            defaultValue={task.task_name}
            required
          />
        </div>
        <div>
          <label htmlFor="taskDes" className="text-lg">
            Task Description
          </label>
          <input
            type="text"
            className="w-full rounded-lg p-1 text-lg shadow-md focus:outline-none focus-visible:outline-none"
            name="task_desc"
            id="taskDes"
            defaultValue={task.task_desc}
            required
          />
        </div>
        <div>
          <label htmlFor="taskDate" className="text-lg">
            Task Date
          </label>
          <div className="flex flex-col gap-2">
            <input
              disabled={checked && `disabled`}
              type="date"
              className={
                !checked
                  ? `w-full rounded-lg bg-white p-1 text-lg shadow-md focus:outline-none focus-visible:outline-none`
                  : `w-full rounded-lg bg-waikawa-gray-50 p-1 text-lg shadow-md focus:outline-none focus-visible:outline-none `
              }
              defaultValue={
                !checked
                  ? `${new Date(task.task_date).toLocaleDateString("en-CA")}`
                  : ""
              }
              min={!checked ? new Date().toLocaleDateString("en-CA") : ""}
              name="task_date"
              id="taskDate"
            />

            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                id="everyDay"
                name="every_day_task"
                value={checked}
                defaultChecked={checked}
                onChange={handleCheckChange}
              />
              <label htmlFor="everyDay">Mark everyday until closed</label>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="" className="text-lg font-medium">
            Your task items😎
          </label>
        </div>
        <div>
          <div className="space-y-2">
            {taskItems.map((item, index) => {
              return (
                <div className="space-y-1 rounded-lg border p-2" key={index}>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="font-Pacifico">
                      Task item: {index + 1}
                    </label>
                    <button
                      onClick={() => removeItem(index)}
                      className=" rounded-md border-2 border-waikawa-gray-700  px-1 py-1 text-sm text-waikawa-gray-700"
                      type="button"
                    >
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
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="text"
                      name={`itemName-${index}`}
                      key={`1${index}`}
                      placeholder="Item Name"
                      value={item.itemName}
                      onChange={(e) => handleItemNameFormChange(e, index)}
                    />
                    <Input
                      type="text"
                      name={`description-${index}`}
                      key={`2${index}`}
                      placeholder="Item Description"
                      value={item.description}
                      onChange={(e) => handledescriptionFormChange(e, index)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-2 flex items-center justify-start">
            <button
              type="button"
              onClick={addItem}
              className="rounded-3xl border px-2 py-1 text-sm text-waikawa-gray-600"
            >
              {taskItems.length > 0 ? "Add more" : "Add item"}
            </button>
          </div>
        </div>
        <input
          type="hidden"
          name="taskItems"
          value={JSON.stringify(taskItems)}
        />
        <div className="mt-2 flex items-center justify-center gap-6">
          <button
            type="submit"
            className="rounded-3xl bg-portage-700  px-3 py-2 text-lg text-waikawa-gray-50"
          >
            Submit
          </button>
          <button
            type="button"
            className="rounded-3xl bg-portage-950  px-3 py-2 text-lg text-waikawa-gray-50"
            onClick={() => {
              navigate(-1);
            }}
          >
            Cancel
          </button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const taskItems = JSON.parse(data.taskItems);

  const task = {
    task_name: data.task_name,
    task_desc: data.task_desc,
    task_date: data.every_day_task === "true" ? "2099-12-31" : data.task_date,
    created_by: "Uday",
    every_day_task: data.every_day_task === "true",
    is_open: true,
    items: taskItems.filter((item) => item.itemName.length > 0),
  };

  // If all ok, insert in DB
  await updateTaskInDb(task, params.taskId);
  return redirect(routeNames.home);
}

export default UpdateTask;
