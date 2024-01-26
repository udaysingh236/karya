import { useEffect, useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import FormLoader from "../../ui/FormLoader";
import { checkPassword } from "../../utils/validate";
import { updatePassword } from "../../services/apiUser";
import { routeNames } from "../../utils/RouteNames";
function UpdatePassword() {
  const formError = useActionData();
  const [isFormError, setIsFormError] = useState(false);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  useEffect(() => {
    if (formError) {
      setIsFormError(true);
    }
  }, [formError]);
  return (
    <div className="mx-auto  flex h-dvh max-w-sm flex-col items-center justify-center">
      {isSubmitting && <FormLoader />}
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
      <div>
        <Form method="PATCH">
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
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="submit"
              className="w-full rounded-3xl bg-portage-600 px-2 py-1  text-lg text-waikawa-gray-50 transition-all duration-300 hover:cursor-pointer hover:bg-portage-800"
            >
              {isSubmitting ? "Updating" : "Update Password"}
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
  console.log(JSON.stringify(data));
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
  await updatePassword(data.pass);

  return redirect(routeNames.home);
}

export default UpdatePassword;
