function TaskItem({ item }) {
  return (
    <li className="flex flex-col flex-wrap items-start justify-between py-2 font-Pacifico font-medium">
      <p className="text-xl">{item.itemName}</p>
      <p className="py-1 text-sm">
        {item.description.length > 0 ? item.description : "------"}
      </p>
    </li>
  );
}

export default TaskItem;
