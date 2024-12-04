import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  // If token is not present, don't render children
  if (!token) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoutes;
