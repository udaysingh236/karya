import { useState } from "react";
import {
  forgetPassword,
  login,
  loginWithGit,
  loginWithGoogle,
} from "../../services/apiUser";
import { useDispatch } from "react-redux";
import { insertUserName, updateAuthnticate, insertEmail } from "./userSlice";
import { useNavigate, useNavigation } from "react-router-dom";
import { routeNames } from "../../utils/RouteNames";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import { checkPassword, validateEmail } from "../../utils/validate";
import FormLoader from "../../ui/FormLoader";

function LoginUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState({ isError: false, errMsg: "" });
  const [isForgetPass, setIsForgetPass] = useState(false);
  const isSubmitting = navigation.state === "submitting";
  console.log(JSON.stringify(navigation));
  async function handleFormSubmit(e) {
    e.preventDefault();
    if (!checkPassword(password)) {
      setFormError({
        ...formError,
        isError: true,
        errMsg: `Password should be of minimum 11 character with atleast one special char and atleast one upper and one lower case char`,
      });
      return;
    }
    if (!validateEmail(email)) {
      setFormError({
        ...formError,
        isError: true,
        errMsg: `Please use correct email address format`,
      });
      return;
    }
    const { user, session, error } = await login(email, password);
    if (user && session && !error) {
      dispatch(updateAuthnticate(true));
      dispatch(insertEmail(user.email));
      dispatch(insertUserName(user.user_metadata.name));
      navigate(routeNames.home);
    } else {
      setFormError({
        ...formError,
        isError: true,
        errMsg: error.message,
      });
    }
  }

  async function handleGitLogin() {
    await loginWithGit();
  }

  async function handleGoogleLogin() {
    await loginWithGoogle();
  }

  async function handleForgetPass() {
    if (!validateEmail(email)) {
      setFormError({
        ...formError,
        isError: true,
        errMsg: `Please use correct email address format`,
      });
      return;
    }
    setIsForgetPass(true);
    await forgetPassword(email);
  }

  return (
    <div className="mx-auto  flex h-dvh max-w-sm flex-col items-center ">
      {isSubmitting && <FormLoader />}
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
      <div className="px-2 text-center">
        {formError.isError && (
          <p className="rounded-lg border border-guardsman-red-100 bg-guardsman-red-50 px-2 py-1 text-sm">
            {formError.errMsg}
          </p>
        )}
        {isForgetPass && (
          <div className="flex items-center justify-center gap-2 rounded-lg border border-portage-300 bg-portage-50 px-2 py-1 text-sm">
            <p className="">
              Password recovery link has been sent to your Email (If it is
              registered with us). <br /> Please check your mail box
            </p>
            <button
              className="self-start rounded-full bg-guardsman-red-200 p-1"
              onClick={() => setIsForgetPass(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
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
                onChange={(e) => {
                  setEmail(e.target.value);
                  setFormError({ isError: false, errMsg: "" });
                  setIsForgetPass(false);
                }}
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
                onChange={(e) => {
                  setPassword(e.target.value);
                  setFormError({ isError: false, errMsg: "" });
                  setIsForgetPass(false);
                }}
              />
              <div className="mt-2 text-right text-xs font-medium ">
                <button
                  type="button"
                  className="transition-all duration-300 hover:cursor-pointer hover:text-portage-700"
                  onClick={handleForgetPass}
                >
                  Forgot Password ?
                </button>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-center">
              <button
                type="submit"
                className="w-full rounded-3xl bg-portage-600 px-2 py-1  text-lg text-waikawa-gray-50 transition-all duration-300 hover:cursor-pointer hover:bg-portage-800"
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
              className="cursor-pointer rounded-full border border-guardsman-red-200 p-1  transition-all duration-300 hover:bg-portage-50"
              onClick={handleGoogleLogin}
            >
              <FcGoogle />
            </div>
            <div
              className="cursor-pointer rounded-full border border-guardsman-red-200 p-1  transition-all duration-300 hover:bg-portage-50"
              onClick={handleGitLogin}
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
            className="text-lg font-medium transition-all duration-300 hover:cursor-pointer hover:text-portage-700 "
          >
            Create One
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginUser;
