import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({ fullName: { firstName, lastName }, email, password });
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  return (
    <section className="p-5 h-screen flex flex-col justify-between">
      <div>
        <img src="./driver.webp" alt="logo" className="w-16 mb-5" />
        <form className="flex flex-col gap-4" onSubmit={submitHandler}>
          <div className="flex flex-col">
            <label htmlFor="firstname" className=" font-medium mb-2">
              What&apos;s our Captain&apos;s name ?
            </label>
            <div className=" flex items-center gap-2">
              <input
                className="bg-[#eeeeee] rounded py-2 px-4 w-1/2 border  placeholder:text-sm"
                type="text"
                value={firstName}
                name="firstname"
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="firstname"
                required
              />
              <input
                className="bg-[#eeeeee] rounded py-2 px-4 w-1/2 border  placeholder:text-sm"
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
            <label htmlFor="email" className="text-base font-medium mb-2">
              What&apos;s our Captain&apos;s email ?
            </label>
            <input
              className="bg-[#eeeeee] rounded py-2 px-4 border w-full  placeholder:text-sm"
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
              className="bg-[#eeeeee] rounded py-2 px-4 border w-full  placeholder:text-sm"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="password"
              required
            />
          </div>
          <button className="bg-[#111111] text-white rounded py-2 px-4 w-full">
            Sign up
          </button>
          <p className="text-center">
            Already have a account?{" "}
            <Link to={"/captain-login"} className="text-blue-600">
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
          This site is protected by reCAPTCHA and{" "}
          <span className="text-blue-400 underline">Google Privacy Policy</span>{" "}
          and <span className="text-blue-400 underline">Terms of Service</span>{" "}
          apply.
        </p>
      </div>
    </section>
  );
};

export default CaptainSignUp;
