import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
function AppLayout() {
  return (
    <div className="mx-auto grid h-dvh  max-w-md grid-rows-[auto_1fr_auto]  bg-gradient-to-b from-waikawa-gray-100 to-waikawa-gray-50 p-4">
      <Header />
      <div className="overflow-scroll">
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
