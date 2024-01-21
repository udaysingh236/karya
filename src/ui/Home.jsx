import { Outlet } from "react-router-dom";
import CreateTaskHome from "../features/task/create/CreateTaskHome";
import { useSelector } from "react-redux";
function Home() {
  const userName = useSelector((state) => state.user.userName);
  return (
    <div className="my-2">
      <h1 className="text-xl font-semibold text-portage-950">
        Hello, {userName}
      </h1>
      <p className="text-base">What are you going to do ?</p>
      <div className="mb-4 mt-2">
        <CreateTaskHome />
      </div>
      <p className="text-center font-Pacifico text-lg">
        Today's tasks - {new Date().toDateString()}
      </p>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
