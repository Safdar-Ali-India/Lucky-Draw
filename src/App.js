import {BrowserRouter as Router,
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Info from "./pages/info";
import AccountSettings from "./pages/account-settings";
import Avatars from "./pages/avatars";
import MyProfileGroupsDone from "./pages/my-profile-groups-done";
import MyProfileGroupsEdit from "./pages/my-profile-groups-edit";
import LuckyMenu from "./pages/lucky-menu";
import CreateATeam from "./pages/create-a-team";
import CreateATeam1 from "./pages/create-a-team1";
import Info7 from "./pages/info7";
import Info6 from "./pages/info6";
import Explore from "./pages/explore";
import City from "./pages/city";
import City1 from "./pages/city1";
import Favorit from "./pages/favorit";
import Electronics from "./pages/electronics";
import SignInMobileNumberDone from "./pages/sign-in-mobile-number-done";
import City2 from "./pages/city2";
import LuckyHome from "./pages/lucky-home";
import LuckyHome1 from "./pages/lucky-home1";
import EnterYourCodeDone from "./pages/enter-your-code-done";
import EnterYourCode from "./pages/enter-your-code";
import SignInMobileNumber from "./pages/sign-in-mobile-number";
import SignInWelcome from "./pages/sign-in-welcome";
import CreateAccount6 from "./pages/create-account6";
import Register from "./pages/register";
import SignInFormWhite from "./pages/sign-in-form-white";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/account-settings":
        title = "";
        metaDescription = "";
        break;
      case "/avatars":
        title = "";
        metaDescription = "";
        break;
      case "/my-profile-groups-done":
        title = "";
        metaDescription = "";
        break;
      case "/my-profile-groups-edit":
        title = "";
        metaDescription = "";
        break;
      case "/lucky-menu":
        title = "";
        metaDescription = "";
        break;
      case "/create-a-team":
        title = "";
        metaDescription = "";
        break;
      case "/create-a-team1":
        title = "";
        metaDescription = "";
        break;
      case "/info-7":
        title = "";
        metaDescription = "";
        break;
      case "/info-6":
        title = "";
        metaDescription = "";
        break;
      case "/explore":
        title = "";
        metaDescription = "";
        break;
      case "/city":
        title = "";
        metaDescription = "";
        break;
      case "/city1":
        title = "";
        metaDescription = "";
        break;
      case "/favorit":
        title = "";
        metaDescription = "";
        break;
      case "/electronics":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in-mobile-number-done":
        title = "";
        metaDescription = "";
        break;
      case "/city2":
        title = "";
        metaDescription = "";
        break;
      case "/lucky-home":
        title = "";
        metaDescription = "";
        break;
      case "/lucky-home1":
        title = "";
        metaDescription = "";
        break;
      case "/enter-your-code-done":
        title = "";
        metaDescription = "";
        break;
      case "/enter-your-code":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in-mobile-number":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in-welcome":
        title = "";
        metaDescription = "";
        break;
      case "/create-account-6":
        title = "";
        metaDescription = "";
        break;
      case "/register":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in-form-white":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
   


    <Routes>
      <Route path="/" element={<SignInFormWhite />} />
      <Route path="/account-settings" element={<AccountSettings />} />
      <Route path="/avatars" element={<Avatars />} />
      <Route path="/my-profile-groups-done" element={<MyProfileGroupsDone />} />
      <Route path="/my-profile-groups-edit" element={<MyProfileGroupsEdit />} />
      <Route path="/lucky-menu" element={<LuckyMenu />} />
      <Route path="/create-a-team" element={<CreateATeam />} />
      <Route path="/create-a-team1" element={<CreateATeam1 />} />
      <Route path="/info-7" element={<Info7 />} />
      <Route path="/info-6" element={<Info6 />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/city" element={<City />} />
      <Route path="/city1" element={<City1 />} />
      <Route path="/favorit" element={<Favorit />} />
      <Route path="/electronics" element={<Electronics />} />
      <Route
        path="/sign-in-mobile-number-done"
        element={<SignInMobileNumberDone />}
      />
      <Route path="/city2" element={<City2 />} />
      <Route path="/lucky-home" element={<LuckyHome />} />
      <Route path="/lucky-home1" element={<LuckyHome1 />} />
      <Route path="/enter-your-code-done" element={<EnterYourCodeDone />} />
      <Route path="/enter-your-code" element={<EnterYourCode />} />
      <Route path="/sign-in-mobile-number" element={<SignInMobileNumber />} />
      <Route path="/sign-in-welcome" element={<SignInWelcome />} />
      <Route path="/create-account-6" element={<CreateAccount6 />} />
      <Route path="/register" element={<Register />} />
      <Route path="/info" element={<Info />} />
    </Routes>
   
  );
}
export default App;
