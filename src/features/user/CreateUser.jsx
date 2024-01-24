import { Form } from "react-router-dom";
function CreateUser() {
  return (
    <div className="mx-auto  flex h-dvh max-w-sm flex-col items-center">
      <div className="mt-10">
        <img
          src="/create.jpg"
          alt="man on a bicycle"
          className="h-52 rounded-lg"
        />
      </div>
      <div>
        <h1>Only few things, we will be all set !</h1>
      </div>
      <div>
        <Form method="POST"></Form>
      </div>
    </div>
  );
}

export default CreateUser;
