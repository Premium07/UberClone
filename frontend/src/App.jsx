import { Routes, Route } from "react-router-dom";
import UserLogin from "./pages/UserLogin";
import UserSignUp from "./pages/UserSignUp";
import CaptainSignUp from "./pages/CaptainSignUp";
import CaptainLogin from "./pages/CaptainLogin";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import UserLogout from "./pages/UserLogout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/captain-signup" element={<CaptainSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route
          path="/user/logout"
          element={<ProtectedRoutes>
            <UserLogout/>
          </ProtectedRoutes>}
        />
      </Routes>
    </>
  );
};

export default App;
