/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    const res = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );

    // console.log(res)

    if (res.status === 200) {
      const data = res.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);

      navigate("/home");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <section className="p-6 h-screen flex flex-col justify-between">
      {/* <Toaster /> */}
      <div>
        <Link to={"/"}>
          {" "}
          <img src="./logo.png" alt="logo" className="w-16 mb-5" />
        </Link>
        <form className="flex flex-col gap-5" onSubmit={submitHandler}>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-base font-medium mb-2">
              What&apos;s your email
            </label>
            <input
              className="bg-[#eeeeee] rounded py-2 px-4 border w-full text-base placeholder:text-sm"
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="youremail@example.com"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-base font-medium mb-2">
              Enter password
            </label>
            <div className="relative">
              <input
                className="bg-[#eeeeee] rounded py-2 px-4 border w-full text-lg placeholder:text-sm pr-10"
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="password"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
              </button>
            </div>
          </div>
          <button className="bg-[#111111] text-white rounded py-2 px-4 w-full text-base">
            Login
          </button>
          <p className="text-center">
            New here?{" "}
            <Link to={"/signup"} className="text-blue-600">
              Create new account
            </Link>
          </p>
        </form>
      </div>
      <div className="mt-4">
        <Link
          to={"/captain-login"}
          className="flex items-center justify-center bg-emerald-700 text-white rounded py-2 px-4 w-full text-base"
        >
          Sign in as Captain.
        </Link>
      </div>
    </section>
  );
};

export default UserLogin;
