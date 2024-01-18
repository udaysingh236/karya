import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Task from "./features/task/show/Task";
import CreateTask from "./features/task/create/CreateTask";
import SearchTask from "./features/task/show/SearchTask";
import UpdateTask from "./features/task/create/UpdateTask";
import Home from "./ui/Home";
import Error from "./ui/Error";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/task/new",
        element: <CreateTask />,
      },
      {
        path: "/task/:taskId",
        element: <Task />,
      },
      {
        path: "/tasks",
        element: <SearchTask />,
      },
      {
        path: "/tasks/update/:taskId",
        element: <UpdateTask />,
      },
      {
        path: "/user",
        element: <SearchTask />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
