import {
  Form,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { checkPassword } from "../../utils/validate";
import { useEffect, useState } from "react";
import { signUpUser } from "../../services/apiUser";
import { routeNames } from "../../utils/RouteNames";
import FormLoader from "../../ui/FormLoader";
function CreateUser() {
  const formError = useActionData();
  const [isFormError, setIsFormError] = useState(false);
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isSubmitting = navigation.state === "submitting";
  useEffect(() => {
    if (formError) {
      setIsFormError(true);
    }
  }, [formError]);
  return (
    <div className="mx-auto  flex h-dvh max-w-sm flex-col items-center">
      {isSubmitting && <FormLoader />}
      <div className="mt-7">
        <img
          src="/create.jpg"
          alt="man on a bicycle"
          className="h-40 rounded-lg"
        />
      </div>
      <div className="mt-8">
        <h1 className="text-lg font-medium">
          Only few things and we will be all set !😎
        </h1>
      </div>
      <div className="my-4 space-y-1 text-center">
        <p className="text-sm ">
          You will receive a verfication link on your Email 🔎
        </p>
        <p className="text-sm">Verify your email and start using app 🚀</p>
      </div>
      <div className="px-2">
        {isFormError && (
          <p className="rounded-lg border border-guardsman-red-100 bg-guardsman-red-50 px-2 py-1 text-sm">
            {formError.isPassErr
              ? formError.passErrMsg
              : formError.isPassValErr
                ? formError.passValErrMsg
                : ""}
          </p>
        )}
      </div>
      <div className="rounded-xl px-4 py-6 shadow-md">
        <Form method="POST">
          <div className="mt-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="w-full rounded-lg border-b border-portage-500 py-1 text-lg focus:outline-none focus-visible:outline-none"
              required
            />
          </div>
          <div className="mt-6">
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              name="pass"
              id="pass"
              placeholder="Your Password"
              className="w-full rounded-lg border-b border-portage-500 py-1 text-lg focus:outline-none focus-visible:outline-none"
              required
              onChange={() => setIsFormError(false)}
            />
          </div>
          <div className="mt-6">
            <label htmlFor="cnfPass">Confirm Password</label>
            <input
              type="password"
              name="cnfPass"
              id="cnfPass"
              placeholder="Confirm Password"
              className="w-full rounded-lg border-b border-portage-500 py-1 text-lg focus:outline-none focus-visible:outline-none"
              required
              onChange={() => setIsFormError(false)}
            />
          </div>
          <div className="mt-6">
            <label htmlFor="userName">Name</label>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Your Name"
              className="w-full rounded-lg border-b border-portage-500 py-1 text-lg focus:outline-none focus-visible:outline-none"
              required
            />
          </div>
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="button"
              className="w-full rounded-3xl bg-portage-900 px-2 py-1  text-lg text-waikawa-gray-50 transition-all duration-300 hover:cursor-pointer hover:bg-portage-950"
              onClick={() => {
                navigate(-1);
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full rounded-3xl bg-portage-600 px-2 py-1  text-lg text-waikawa-gray-50 transition-all duration-300 hover:cursor-pointer hover:bg-portage-800"
            >
              {isSubmitting ? "Creating" : "Create Account"}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const error = {};

  if (data.pass !== data.cnfPass) {
    error.isPassErr = true;
    error.passErrMsg = "Passwords are not matching, Please check !";
  }

  if (!checkPassword(data.pass)) {
    error.isPassValErr = true;
    error.passValErrMsg =
      "Password should be of minimum 11 character with atleast one special char and atleast one upper and one lower case char";
  }

  if (Object.keys(error).length > 0) {
    return error;
  }

  await signUpUser(data.email, data.pass, data.userName);
  return redirect(routeNames.login);
}

export default CreateUser;
