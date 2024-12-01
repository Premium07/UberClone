/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({ email, password });
    // console.log(userData);
    setEmail("");
    setPassword("");
  };

  return (
    <section className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img src="./logo.png" alt="logo" className="w-16 mb-10" />
        <form className="flex flex-col gap-5" onSubmit={submitHandler}>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium mb-2">
              What&apos;s your email
            </label>
            <input
              className="bg-[#eeeeee] rounded py-2 px-4 border w-full text-lg placeholder:text-base"
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="youremail@example.com"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg font-medium mb-2">
              Enter password
            </label>
            <input
              className="bg-[#eeeeee] rounded py-2 px-4 border w-full text-lg placeholder:text-base"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="password"
              required
            />
          </div>
          <button className="bg-[#111111] text-white rounded py-2 px-4 w-full text-lg placeholder:text-base">
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
          className="flex items-center justify-center bg-emerald-700 text-white rounded py-2 px-4 w-full text-lg placeholder:text-base"
        >
          Sign in as Captain.
        </Link>
      </div>
    </section>
  );
};

export default UserLogin;
