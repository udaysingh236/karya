import { useParams } from "react-router-dom";

function TaskItem({ item }) {
  const taskId = useParams();
  console.log(taskId);
  return (
    <li className="font-Pacifico flex items-center justify-between py-2 font-medium">
      <p>{item.itemName}</p>
      <p>{item.description.length > 0 ? item.description : "------"}</p>
    </li>
  );
}

export default TaskItem;
