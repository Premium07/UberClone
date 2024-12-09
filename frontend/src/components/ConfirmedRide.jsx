import { IoIosArrowDown } from "react-icons/io";
import { LuMapPin, LuMapPinCheck, LuCircleDollarSign } from "react-icons/lu";

const ConfirmedRide = ({
  // setVehiclePanelOpen,
  // vehiclePanelOpen,
  setConfirmRidePanel,
}) => {
  return (
    <section>
      <div
        onClick={() => {
          // setVehiclePanelOpen(!vehiclePanelOpen);
          setConfirmRidePanel(false);
        }}
        className="w-full absolute top-0 left-1/2 text-gray-500 text-xl p-3"
      >
        <IoIosArrowDown />
      </div>
      <h3 className="font-semibold text-xl mb-4">Confirm your Ride</h3>
      <section className="flex flex-col justify-between items-center gap-2">
        <img src="./car.webp" alt="confirm Ride Image" className="h-20" />
        <div className="w-full flex flex-col gap-4 justify-center">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <LuMapPin className="text-xl" />
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg">Pharsatikar Chowk</h3>
              <p className="text-sm text-gray-600 -mt-1">
                Suddhodhan 4, Rupandehi
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-2">
            <LuMapPinCheck className="text-xl" />
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg">Manigram Chowk</h3>
              <p className="text-sm text-gray-600 -mt-1">
                Tilottama 12, Rupandehi
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3">
            <LuCircleDollarSign className="text-xl" />
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg">₹ 193.20</h3>
              <p className="text-sm text-gray-600 -mt-1">Cash</p>
            </div>
          </div>
        </div>

        <button className="w-full bg-black font-semibold p-2 rounded-lg text-white mt-4">
          Confirm
        </button>
      </section>
    </section>
  );
};

export default ConfirmedRide;
