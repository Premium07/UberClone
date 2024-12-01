/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <section className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img src="./driver.webp" alt="logo" className="w-16 mb-5" />
        <form className="flex flex-col gap-5" onSubmit={submitHandler}>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-base font-medium mb-2">
              What&apos;s your email
            </label>
            <input
              className="bg-[#eeeeee] rounded py-2 px-4 border w-full text-lg placeholder:text-sm"
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
              className="bg-[#eeeeee] rounded py-2 px-4 border w-full text-lg placeholder:text-sm"
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
            Join a fleet?{" "}
            <Link to={"/captain-signup"} className="text-blue-600">
              Register as a captain
            </Link>
          </p>
        </form>
      </div>
      <div className="mt-4">
        <Link
          to={"/login"}
          className="flex items-center justify-center bg-orange-700 text-white rounded py-2 px-4 w-full text-base"
        >
          Sign in as User.
        </Link>
      </div>
    </section>
  );
};

export default CaptainLogin;
