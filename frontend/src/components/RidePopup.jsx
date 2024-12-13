import { IoIosArrowDown } from "react-icons/io";
import { LuCircleDollarSign, LuMapPin, LuMapPinCheck } from "react-icons/lu";

const RidePopup = ({
  setRidePopupPanel,
  ridePopupPanel,
  setConfirmRidePopupPanel,
}) => {
  return (
    <>
      <div
        onClick={() => {
          setRidePopupPanel(!ridePopupPanel);
        }}
        className="w-full absolute top-0 left-1/2 text-gray-500 text-xl p-3"
      >
        <IoIosArrowDown />
      </div>
      <h3 className="font-semibold text-xl mb-4">New Ride Available !</h3>
      <div className="flex items-center justify-between p-4 border border-yellow-600 rounded-lg mt-3">
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
      <section className="flex flex-col justify-between items-center gap-2">
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

        <div className="w-full flex items-center mt-4 gap-2">
          <button
            onClick={() => {
              setRidePopupPanel(false);
            }}
            className="w-full text-white p-3 rounded-lg bg-red-700 "
          >
            Ignore
          </button>
          <button
            onClick={() => {
              setConfirmRidePopupPanel(true);
              setRidePopupPanel(false);
            }}
            className="w-full bg-emerald-700 p-3 rounded-lg text-white"
          >
            Accept
          </button>
        </div>
      </section>
    </>
  );
};

export default RidePopup;
