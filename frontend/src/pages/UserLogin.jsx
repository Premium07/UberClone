/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

    if (res.status === 200) {
      const data = res.data;
      setUser(data.user);
      navigate("/home");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <section className="p-6 h-screen flex flex-col justify-between">
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
            <input
              className="bg-[#eeeeee] rounded py-2 px-4 border w-full text-base placeholder:text-sm"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="password"
              required
            />
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
