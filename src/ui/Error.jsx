import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);
  return <div>Oops..!! Something went wrong ☹</div>;
}

export default Error;
