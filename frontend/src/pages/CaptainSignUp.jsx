/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const CaptainSignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [color, setVehicleColor] = useState("");
  const [plate, setVehiclePlate] = useState("");
  const [capacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      fullName: { firstName, lastName },
      email,
      password,
      vehicle: {
        color,
        plate,
        capacity,
        vehicleType,
      },
    };

    const res = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );

    if (res.status === 201) {
      const data = res.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };

  return (
    <section className="p-5 h-screen flex flex-col justify-between">
      <div>
        <div className="w-fit">
          <Link to={"/"} className="">
            <img src="./driver.webp" alt="logo" className="w-16 mb-5" />
          </Link>
        </div>
        <form className="flex flex-col gap-4" onSubmit={submitHandler}>
          <div className="flex flex-col">
            <label htmlFor="firstname" className="font-medium mb-1">
              What&apos;s our Captain&apos;s name?
            </label>
            <div className="flex items-center gap-2">
              <input
                className="bg-[#eeeeee] rounded py-2 px-4 w-1/2 border placeholder:text-sm"
                type="text"
                value={firstName}
                name="firstname"
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                required
              />
              <input
                className="bg-[#eeeeee] rounded py-2 px-4 w-1/2 border placeholder:text-sm"
                type="text"
                placeholder="Last Name"
                value={lastName}
                name="lastname"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-base font-medium mb-1">
              What&apos;s our Captain&apos;s email?
            </label>
            <input
              className="bg-[#eeeeee] rounded py-2 px-4 border w-full placeholder:text-sm"
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
          <div className="flex flex-col">
            <label className="text-base font-medium mb-1">
              Vehicle Details
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                className="bg-[#eeeeee] rounded py-2 px-4 border placeholder:text-sm"
                type="text"
                value={color}
                name="vehicleColor"
                onChange={(e) => setVehicleColor(e.target.value)}
                placeholder="Vehicle Color"
                required
              />
              <input
                className="bg-[#eeeeee] rounded py-2 px-4 border placeholder:text-sm"
                type="text"
                value={plate}
                name="vehiclePlate"
                onChange={(e) => setVehiclePlate(e.target.value)}
                placeholder="Vehicle Plate Number"
                required
              />
              <input
                className="bg-[#eeeeee] rounded py-2 px-4 border placeholder:text-sm"
                type="number"
                value={capacity}
                name="vehicleCapacity"
                onChange={(e) => setVehicleCapacity(e.target.value)}
                placeholder="Vehicle Capacity"
                required
              />
              <select
                className="bg-[#eeeeee] rounded py-2 px-4 border placeholder:text-sm"
                value={vehicleType}
                name="vehicleType"
                onChange={(e) => setVehicleType(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select Vehicle Type
                </option>
                <option value="car">Car</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="auto">Auto</option>
              </select>
            </div>
          </div>
          <button className="bg-[#111111] text-white rounded py-2 mt-4 px-4 w-full">
            Create captain account
          </button>
          <p className="text-center">
            Already have an account?{" "}
            <Link to={"/captain-login"} className="text-blue-600">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div className="mt-4">
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
