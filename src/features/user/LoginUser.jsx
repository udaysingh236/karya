import { useState } from "react";
import { login } from "../../services/apiUser";
import { useDispatch } from "react-redux";
import { insertUserName, updateAuthnticate, insertEmail } from "./userSlice";
import { useNavigate } from "react-router-dom";
import { routeNames } from "../../utils/RouteNames";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";

function LoginUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleFormSubmit(e) {
    e.preventDefault();
    const { user, session, error } = await login(email, password);
    if (user && session && !error) {
      dispatch(updateAuthnticate(true));
      dispatch(insertEmail(user.email));
      dispatch(insertUserName(user.user_metadata.displayName));
      navigate(routeNames.home);
    } else {
      alert(error.message);
    }
  }
  return (
    <div className="mx-auto  flex h-dvh max-w-sm flex-col items-center">
      <div className="mt-10">
        <img
          src="/login.jpg"
          alt="man on a bicycle"
          className="h-44 rounded-lg"
        />
      </div>
      <div>
        <h1 className="self-center text-lg font-bold">
          Karya - Let's plan the future!
        </h1>
      </div>

      <div className="divide-y divide-portage-200 self-start rounded-xl px-4 py-6 shadow-md">
        <div className="mb-8">
          <form method="POST" className="" onSubmit={handleFormSubmit}>
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
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <label htmlFor="pwd" className="text-lg">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="pwd"
                className="w-full rounded-lg bg-portage-50 p-2 text-xl focus:outline-none focus-visible:outline-none"
                value={password}
                placeholder="Your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="mt-2 text-right text-xs font-medium ">
                <Link
                  to={routeNames.forgotPass}
                  className="hover:cursor-pointer hover:text-portage-700"
                >
                  Forgot Password ?
                </Link>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-center">
              <button
                type="submit"
                className="w-full rounded-3xl bg-portage-600  px-2 py-1 text-lg text-waikawa-gray-50 hover:cursor-pointer hover:bg-portage-800"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="">
          <div className="mt-8 text-center">
            <p>Or Sign Up Using</p>
          </div>
          <div className="mt-5 flex items-center justify-center gap-3 text-4xl">
            <div
              className="rounded-full border border-guardsman-red-200  p-1"
              onClick={() => alert("clicked")}
            >
              <FcGoogle />
            </div>
            <div
              className="rounded-full border border-guardsman-red-200  p-1"
              onClick={() => alert("clicked")}
            >
              <IoLogoGithub />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <p>
          Don't have an account ?{" "}
          <Link
            to={routeNames.createAccount}
            className="text-lg font-medium hover:cursor-pointer hover:text-portage-700 "
          >
            Create One
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginUser;
