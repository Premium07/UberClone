/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";

const UserSignUp = () => {
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
    <section className="p-5 h-screen flex flex-col justify-between">
      <div>
        <img src="./logo.png" alt="logo" className="w-16 mb-5" />
        <form className="flex flex-col gap-4" onSubmit={submitHandler}>
          <div className="flex flex-col">
            <label htmlFor="firstname" className="text-base font-medium mb-2">
              What&apos;s your name
            </label>
            <div className=" flex items-center gap-2">
            <input
              className="bg-[#eeeeee] rounded py-2 px-4 w-1/2 border text-base placeholder:text-sm"
              type="text"
              placeholder="firstname"
              required
            />
            <input
              className="bg-[#eeeeee] rounded py-2 px-4 w-1/2 border text-base placeholder:text-sm"
              type="text"
              placeholder="lastname"
              required
            />
            </div>
          </div>
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
            Sign Up
          </button>
          <p className="text-center">
            Already account?{" "}
            <Link to={"/login"} className="text-blue-600">
              Login your account
            </Link>
          </p>
        </form>
      </div>
      <div className="mt-4">
        <Link
          to={"/captain-signup"}
          className="flex items-center justify-center bg-emerald-700 text-white rounded py-2 px-4 w-full text-base"
        >
          Sign up as Captain.
        </Link>
      </div>
    </section>
  );
};

export default UserSignUp;
