import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { routeNames } from "../utils/RouteNames";
import { useEffect } from "react";
import Loader from "./Loader";
import supabase from "../services/supabase";
import {
  insertEmail,
  insertUserName,
  updateAuthnticate,
} from "../features/user/userSlice";
function AppLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  useEffect(() => {
    async function getSessionInfo() {
      console.log("in useeffect");
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      if (error || !session) {
        navigate(routeNames.login);
      } else {
        dispatch(updateAuthnticate(true));
        dispatch(insertEmail(session.user.email));
        dispatch(insertUserName(session.user.user_metadata.displayName));
      }
    }
    getSessionInfo();
  }, [dispatch, navigate]);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return isAuthenticated ? (
    <div className="mx-auto grid h-dvh  max-w-md grid-rows-[auto_1fr_auto]  bg-gradient-to-b from-waikawa-gray-100 to-waikawa-gray-50 p-4 transition-all delay-300 ease-in-out">
      <Header />
      <div className="overflow-scroll">
        <main>
          <Outlet />
          {isLoading && <Loader />}
        </main>
      </div>
      <Footer />
    </div>
  ) : (
    <Loader />
  );
}

export default AppLayout;
