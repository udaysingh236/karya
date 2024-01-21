import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Task from "./features/task/show/Task";
import CreateTask from "./features/task/create/CreateTask";
import SearchTask from "./features/task/show/SearchTask";
import UpdateTask from "./features/task/create/UpdateTask";
import { loader as taskLoader } from "./features/task/show/SearchTask";
import { loader as allTaskLoader } from "./features/task/show/AllTasks";
import { action as createTaskAction } from "./features/task/create/CreateTask";
import { action as updateTaskAction } from "./features/task/create/UpdateTask";
import Home from "./ui/Home";
import Error from "./ui/Error";
import AllTasks from "./features/task/show/AllTasks";
import LoginUser from "./features/user/LoginUser";
import User from "./features/user/User";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <SearchTask />,
            loader: taskLoader,
          },
        ],
      },
      {
        path: "task/new",
        element: <CreateTask />,
        action: createTaskAction,
      },
      {
        path: "task/:taskId",
        element: <Task />,
      },
      {
        path: "tasks/all",
        element: <AllTasks />,
        loader: allTaskLoader,
      },
      {
        path: "tasks/update/:taskId",
        element: <UpdateTask />,
        action: updateTaskAction,
      },
      {
        path: "user",
        element: <User />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginUser />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
