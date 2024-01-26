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
import { action as createUserAction } from "./features/user/CreateUser";
import { action as updatePasswordAction } from "./features/user/UpdatePassword";

import Home from "./ui/Home";
import Error from "./ui/Error";
import AllTasks from "./features/task/show/AllTasks";
import LoginUser from "./features/user/LoginUser";
import User from "./features/user/User";
import CreateUser from "./features/user/CreateUser";
import UpdatePassword from "./features/user/UpdatePassword";
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
  {
    path: "/login/createAccount",
    element: <CreateUser />,
    action: createUserAction,
  },
  {
    path: "/login/updatePassword",
    element: <UpdatePassword />,
    action: updatePasswordAction,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
