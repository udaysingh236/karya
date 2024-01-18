import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="mb-3 flex justify-center rounded-xl bg-gradient-to-r from-portage-900 to-portage-500 p-1">
      <Link
        to="/"
        className="font-Montserrat text-stone-700 text-2xl font-bold"
      >
        <span className=" text-portage-50">Karya</span>
      </Link>
    </header>
  );
}

export default Header;
