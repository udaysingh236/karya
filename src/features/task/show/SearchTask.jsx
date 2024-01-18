import TaskList from "./TaskList";

const tasks = [
  {
    id: "123",
    taskName: "Upcoming Grocery",
    createdOn: "14-01-2024",
    createdBy: "Uday",
    updatedAt: "14-01-2024",
    taskDate: "20-01-2024",
    taskStatus: "open",
    description: "What we need to buy next",
    items: [
      {
        itemName: "Oil",
        description: "Dhara oil - 2 lit",
      },
      {
        itemName: "Anjeer",
        description: "",
      },
    ],
  },
  {
    id: "1223",
    taskName: "Upcoming Groceryrrrrrr",
    createdOn: "14-01-2024",
    createdBy: "Uday",
    updatedAt: "14-01-2024",
    taskDate: "20-01-2024",
    taskStatus: "open",
    description: "What we need to buy next",
    items: [
      {
        itemName: "Oil",
        description: "Dhara oil - 2 lit",
      },
      {
        itemName: "Anjeer",
        description: "",
      },
    ],
  },
  {
    id: "11239",
    taskName: "Upcoming Groceryyyyyyyyyyyyyyyyyyyyyy",
    createdOn: "14-01-2024",
    createdBy: "Uday",
    updatedAt: "14-01-2024",
    taskDate: "20-01-2024",
    taskStatus: "open",
    description: "What we need to buy next",
    items: [
      {
        itemName: "Oil",
        description: "Dhara oil - 2 lit",
      },
      {
        itemName: "Anjeer",
        description: "",
      },
    ],
  },
  {
    id: "11238",
    taskName: "Upcoming Groceryyyyyyyyyyyyyyyyyyyyyy",
    createdOn: "14-01-2024",
    createdBy: "Uday",
    updatedAt: "14-01-2024",
    taskDate: "20-01-2024",
    taskStatus: "open",
    description: "What we need to buy next",
    items: [
      {
        itemName: "Oil",
        description: "Dhara oil - 2 lit",
      },
      {
        itemName: "Anjeer",
        description: "",
      },
    ],
  },
  {
    id: "11237",
    taskName: "Upcoming Groceryyyyyyyyyyyyyyyyyyyyyy",
    createdOn: "14-01-2024",
    createdBy: "Uday",
    updatedAt: "14-01-2024",
    taskDate: "20-01-2024",
    taskStatus: "open",
    description: "What we need to buy next",
    items: [
      {
        itemName: "Oil",
        description: "Dhara oil - 2 lit",
      },
      {
        itemName: "Anjeer",
        description: "",
      },
    ],
  },
  {
    id: "11236",
    taskName: "Upcoming Groceryyyyyyyyyyyyyyyyyyyyyy",
    createdOn: "14-01-2024",
    createdBy: "Uday",
    updatedAt: "14-01-2024",
    taskDate: "20-01-2024",
    taskStatus: "open",
    description: "What we need to buy next",
    items: [
      {
        itemName: "Oil",
        description: "Dhara oil - 2 lit",
      },
      {
        itemName: "Anjeer",
        description: "",
      },
    ],
  },
  {
    id: "11235",
    taskName: "Upcoming Groceryyyyyyyyyyyyyyyyyyyyyy",
    createdOn: "14-01-2024",
    createdBy: "Uday",
    updatedAt: "14-01-2024",
    taskDate: "20-01-2024",
    taskStatus: "open",
    description: "What we need to buy next",
    items: [
      {
        itemName: "Oil",
        description: "Dhara oil - 2 lit",
      },
      {
        itemName: "Anjeer",
        description: "",
      },
    ],
  },
  {
    id: "14323",
    taskName: "Upcoming Groceryuuuuuuuuuuuuuuuu",
    createdOn: "14-01-2024",
    createdBy: "Uday",
    updatedAt: "14-01-2024",
    taskDate: "20-01-2024",
    taskStatus: "open",
    description: "What we need to buy next",
    items: [
      {
        itemName: "Oil",
        description: "Dhara oil - 2 lit",
      },
      {
        itemName: "Anjeer",
        description: "",
      },
    ],
  },
  {
    id: "1423",
    taskName: "Upcoming Groceryuuuuuuuuuuuuuuuu",
    createdOn: "14-01-2024",
    createdBy: "Uday",
    updatedAt: "14-01-2024",
    taskDate: "20-01-2024",
    taskStatus: "open",
    description: "What we need to buy next",
    items: [
      {
        itemName: "Oil",
        description: "Dhara oil - 2 lit",
      },
      {
        itemName: "Anjeer",
        description: "",
      },
    ],
  },
];

function SearchTask() {
  return (
    <ul className=" space-y-3">
      {tasks.map((task) => (
        <TaskList key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default SearchTask;
