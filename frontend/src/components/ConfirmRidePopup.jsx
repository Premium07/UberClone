import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { LuCircleDollarSign, LuMapPin, LuMapPinCheck } from "react-icons/lu";
import { Link } from "react-router-dom";

const ConfirmRidePopup = ({ setConfirmRidePopupPanel }) => {
  const [otp, setOtp] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div
        onClick={() => {
          setConfirmRidePopupPanel(false);
        }}
        className="w-full absolute top-0 left-1/2 text-gray-500 text-xl p-3"
      >
        <IoIosArrowDown />
      </div>
      <h3 className="font-semibold text-xl mb-10 mt-2">
        Confirm this ride to Start
      </h3>
      <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-3">
        <div className="flex items-center gap-3">
          <img
            src="./user.png"
            alt="user"
            className="size-12 rounded-full object-cover"
          />
          <h2 className="text-lg font-semibold">Passenger Name</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>
      <section className="flex flex-col justify-between items-center gap-2 mt-8">
        <div className="w-full flex flex-col gap-4 justify-center">
          <div className="flex items-center gap-5 p-2 border-b-2">
            <LuMapPin className="text-xl" />
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg">Pharsatikar Chowk</h3>
              <p className="text-sm text-gray-600 -mt-1">
                Suddhodhan 4, Rupandehi
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-2 border-b-2">
            <LuMapPinCheck className="text-xl" />
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg">Manigram Chowk</h3>
              <p className="text-sm text-gray-600 -mt-1">
                Tilottama 12, Rupandehi
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-2">
            <LuCircleDollarSign className="text-xl" />
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg">₹ 193.20</h3>
              <p className="text-sm text-gray-600 -mt-1">Cash</p>
            </div>
          </div>
        </div>

        <div className="w-full mt-8">
          <form
            onSubmit={submitHandler}
            className="flex items-center flex-col gap-2 w-full"
          >
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="bg-[#eeeeee] px-6 py-4 text-lg rounded-lg w-full "
            />
            <div className="flex flex-col gap-1 w-full mt-2">
              <Link
                to={"/captain-riding"}
                className="w-full bg-emerald-700 p-2 rounded-lg text-lg text-white flex items-center justify-center"
              >
                Confirm
              </Link>
              <button
                onClick={() => {
                  setConfirmRidePopupPanel(false);
                }}
                className="w-full bg-red-700 p-2 text-lg rounded-lg text-white "
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ConfirmRidePopup;
