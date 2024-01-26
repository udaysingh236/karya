import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DisplayRedirect({ redirectTo = "/", keepIdleFor = 2000, children }) {
  const navigate = useNavigate();
  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate(redirectTo);
    }, keepIdleFor);

    return function () {
      clearTimeout(timerId);
    };
  }, [keepIdleFor, navigate, redirectTo]);
  return (
    <div className="mx-auto  flex h-dvh max-w-sm flex-col items-center justify-center">
      {children}
    </div>
  );
}

export default DisplayRedirect;
