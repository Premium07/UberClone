import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";

const UserProtectedRoutes = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const { setUser, loading, setLoading } = useContext(UserDataContext);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data.captain);
          setLoading(false);
        } 
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [token, navigate]);

 
  if (loading)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <span className="size-10 animate-spin border-4 border-t-4 border-t-gray-500 rounded-full"></span>
      </div>
    );

  return <>{children}</>;
};

export default UserProtectedRoutes;
