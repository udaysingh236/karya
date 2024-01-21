import { useState } from "react";
import { login } from "../../services/apiUser";
import { useDispatch } from "react-redux";
import { insertUserName, updateAuthnticate, insertEmail } from "./userSlice";
import { useNavigate } from "react-router-dom";
import { routeNames } from "../../utils/RouteNames";
function LoginUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleFormSubmit(e) {
    e.preventDefault();
    const { user, session } = await login(email, password);
    if (user && session) {
      dispatch(updateAuthnticate(true));
      dispatch(insertEmail(user.email));
      dispatch(insertUserName(user.user_metadata.displayName));
      navigate(routeNames.home);
    }
  }
  return (
    <div className="mx-auto grid  h-dvh max-w-md grid-rows-[0.5fr_0.1fr_auto] items-end justify-items-center">
      <div>
        <img
          src="/login.jpg"
          alt="man on a bicycle"
          className="h-44 rounded-lg"
        />
      </div>
      <h1 className="self-center text-lg font-bold">
        Karya - Let's plan the future!
      </h1>
      <form
        method="POST"
        className="space-y-3 self-start rounded-xl p-4 shadow-xl"
        onSubmit={handleFormSubmit}
      >
        <div>
          <label htmlFor="em" className="text-lg">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="em"
            className="w-full rounded-lg bg-portage-50 p-2 text-xl focus:outline-none focus-visible:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="pwd" className="text-lg">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="pwd"
            className="w-full rounded-lg bg-portage-50 p-2 text-xl focus:outline-none focus-visible:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {email && password && (
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="rounded-3xl bg-portage-700  px-2 py-1 text-lg text-waikawa-gray-50"
            >
              Login
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default LoginUser;
