import { useDispatch } from "react-redux";
import { clearUserState } from "./userSlice";
import { useNavigate } from "react-router-dom";
import { routeNames } from "../../utils/RouteNames";
import { logout } from "../../services/apiUser";
import { clearTaskState } from "../task/taskSlice";

function User() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleLogout() {
    dispatch(clearUserState());
    dispatch(clearTaskState());
    logout();
    navigate(routeNames.login);
  }
  return (
    <div className="mt-6">
      <div className="flex gap-2">
        <span>Name: </span>
        <p className="font-medium">Uday</p>
      </div>
      <div className="flex gap-2">
        <span>Email: </span>
        <p className="font-medium">udaysingh236@gmail.com</p>
      </div>
      <div className="mt-6 flex items-center justify-center">
        <button
          className="rounded-3xl bg-portage-700  px-3 py-2 text-lg text-waikawa-gray-50"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default User;
