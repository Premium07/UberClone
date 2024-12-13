import { Routes, Route } from "react-router-dom";
import UserLogin from "./pages/UserLogin";
import UserSignUp from "./pages/UserSignUp";
import CaptainSignUp from "./pages/CaptainSignUp";
import CaptainLogin from "./pages/CaptainLogin";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import UserProtectedRoutes from "./pages/UserProtectedRoutes";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectedRoutes from "./pages/CaptainProtectedRoutes";
import RidingVehicle from "./pages/RidingVehicle";
import CaptainRiding from "./pages/CaptainRiding";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={
            <UserProtectedRoutes>
              <Home />
            </UserProtectedRoutes>
          }
        />
        <Route
          path="/captain-home"
          element={
            <CaptainProtectedRoutes>
              <CaptainHome />
            </CaptainProtectedRoutes>
          }
        />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/riding" element={<RidingVehicle />} />
        <Route path="/captain-riding" element={<CaptainRiding />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/captain-signup" element={<CaptainSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route
          path="/user/logout"
          element={
            <UserProtectedRoutes>
              <UserLogout />
            </UserProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
};

export default App;
