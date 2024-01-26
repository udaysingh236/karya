import { useDispatch, useSelector } from "react-redux";
import { clearUserState } from "./userSlice";
import { useNavigate } from "react-router-dom";
import { routeNames } from "../../utils/RouteNames";
import { logout } from "../../services/apiUser";
import { clearTaskState } from "../task/taskSlice";

function User() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userName, email } = useSelector((state) => state.user);
  async function handleLogout() {
    dispatch(clearUserState());
    dispatch(clearTaskState());
    await logout();
    navigate(routeNames.login);
  }
  return (
    <div className="mt-6 flex flex-col items-center justify-center">
      <div className="flex gap-2">
        <span>Name: </span>
        <p className="font-medium">{userName}</p>
      </div>
      <div className="flex gap-2">
        <span>Email: </span>
        <p className="font-medium">{email}</p>
      </div>
      <div className="mt-6 flex flex-col items-center justify-center gap-2">
        <button
          className=" rounded-3xl bg-portage-600 px-3 py-2  text-lg text-waikawa-gray-50 transition-all duration-300 hover:cursor-pointer hover:bg-portage-800"
          onClick={handleLogout}
        >
          Logout
        </button>
        <button
          className=" rounded-3xl bg-portage-600 px-3 py-2  text-lg text-waikawa-gray-50 transition-all duration-300 hover:cursor-pointer hover:bg-portage-800"
          onClick={() => navigate(routeNames.forgotPass)}
        >
          Update Password
        </button>
      </div>
    </div>
  );
}

export default User;
