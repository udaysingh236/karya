import { Link } from "react-router-dom";

function Button({ children, type, to, onClick }) {
  if (type === "primary") {
    return (
      <div>
        <button className="rounded-3xl bg-portage-700  px-3 py-2 text-xl text-waikawa-gray-50">
          {children}
        </button>
      </div>
    );
  }
  if (type === "primary-to") {
    return (
      <div>
        <Link
          to={to}
          className="block rounded-3xl bg-portage-700  px-3 py-2 text-xl text-waikawa-gray-50"
        >
          {children}
        </Link>
      </div>
    );
  }
  if (type === "secondry") {
    return (
      <div>
        <button className="rounded-full border-2 border-waikawa-gray-700  px-2 py-2 text-sm text-waikawa-gray-700">
          {children}
        </button>
      </div>
    );
  }
  if (type === "secondry-to") {
    return (
      <div>
        <Link
          to={to}
          className="block rounded-full border-2 border-waikawa-gray-700  px-2 py-2 text-sm text-waikawa-gray-700"
        >
          {children}
        </Link>
      </div>
    );
  }
  if (type === "tertiary") {
    return (
      <div>
        <button className="rounded-full bg-portage-900  px-4 py-2 text-base font-medium text-waikawa-gray-50">
          {children}
        </button>
      </div>
    );
  }
  if (type === "tertiary-to") {
    return (
      <div>
        <Link
          to={to}
          className="block rounded-full bg-portage-900  px-4 py-2 text-base font-medium text-waikawa-gray-50"
        >
          {children}
        </Link>
      </div>
    );
  }
}

export default Button;
