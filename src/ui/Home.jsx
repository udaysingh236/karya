import SearchTask from "../features/task/show/SearchTask";
import CreateTaskHome from "../features/task/create/CreateTaskHome";
function Home() {
  return (
    <div className="my-2">
      <h1 className="text-xl font-semibold text-portage-950">Hello, User</h1>
      <p className="text-base">What are you going to do ?</p>
      <div className="mb-4 mt-2">
        <CreateTaskHome />
      </div>
      <p className="text-center font-Pacifico text-lg">
        Today's tasks - {new Date().toDateString()}
      </p>
      <div className="">
        <SearchTask />
      </div>
    </div>
  );
}

export default Home;
