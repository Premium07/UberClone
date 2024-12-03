/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";

const UserSignUp = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({ fullName: { firstName, lastName }, email, password });
    // console.log(userData);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <section className="p-5 h-screen flex flex-col justify-between">
      <div>
        <img src="./logo.png" alt="logo" className="w-16 mb-5" />
        <form className="flex flex-col gap-4" onSubmit={submitHandler}>
          <div className="flex flex-col">
            <label htmlFor="firstname" className="text-lg font-medium mb-2">
              What&apos;s your name
            </label>
            <div className=" flex items-center gap-2">
              <input
                className="bg-[#eeeeee] rounded py-2 px-4 w-1/2 border text-lg placeholder:text-base"
                type="text"
                value={firstName}
                name="firstname"
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="firstname"
                required
              />
              <input
                className="bg-[#eeeeee] rounded py-2 px-4 w-1/2 border text-lg placeholder:text-base"
                type="text"
                placeholder="lastname"
                value={lastName}
                name="lastname"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
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
          <button className="bg-[#111111] text-white rounded py-2 px-4 w-full text-lg">
            Sign up
          </button>
          <p className="text-center">
            Already have a account?{" "}
            <Link to={"/login"} className="text-blue-600">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div className="mt-4">
        {/* <Link
          to={"/captain-signup"}
          className="flex items-center justify-center bg-emerald-700 text-white rounded py-2 px-4 w-full text-base"
        >
          Sign up as Captain.
        </Link> */}
        <p className="text-[10px] leading-tight">
          By proceeding, you consent to get calls, WhatsApp or SMS messages,
          including by automated means, from Uber and its affiliates to the
          number provided.
        </p>
      </div>
    </section>
  );
};

export default UserSignUp;
