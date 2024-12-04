import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  if (!token) {
    navigate("/login");
    return null; // Avoid sending a null token
  }

  axios
    .get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .finally(() => {
      // Clear token and redirect regardless of the response
      localStorage.removeItem("token");
      
      navigate("/login");
    });

  return <div>Logging out...</div>;
};

export default UserLogout;
