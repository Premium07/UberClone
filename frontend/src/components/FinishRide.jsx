import { IoIosArrowDown } from "react-icons/io";
import { LuCircleDollarSign, LuMapPin, LuMapPinCheck } from "react-icons/lu";
import { Link } from "react-router-dom";

const FinishRide = ({ setFinishRidePanel }) => {
  return (
    <div>
      <div
        onClick={() => {
          setFinishRidePanel((prev) => !prev);
        }}
        className="w-full absolute top-0 left-1/2 text-gray-500 text-xl p-3"
      >
        <IoIosArrowDown />
      </div>
      <h3 className="font-semibold text-xl mb-10 mt-2">Finish this Ride</h3>
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

        <div className="w-full mt-10">
          <Link
            to={"/captain-home"}
            className="w-full bg-emerald-700 p-3 rounded-lg text-lg text-white flex items-center justify-center"
          >
            Finish Ride
          </Link>
          {/* <p className="text-gray-600 mt-10 text-xs px-2">Click on finish ride button if you have completed the Payment.</p> */}
        </div>
      </section>
    </div>
  );
};

export default FinishRide;
