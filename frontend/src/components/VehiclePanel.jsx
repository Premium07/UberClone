import { FaUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const VehiclePanel = ({
  vehiclePanelOpen,
  setVehiclePanelOpen,
  setConfirmRidePanel,
}) => {
  return (
    <section>
      <div
        onClick={() => setVehiclePanelOpen(!vehiclePanelOpen)}
        className="w-full absolute top-0 left-1/2 text-gray-500 text-xl p-3"
      >
        <IoIosArrowDown />
      </div>
      <div
        onClick={() => setConfirmRidePanel(true)}
        className="flex items-start justify-between p-3 w-full border-2 rounded-xl active:border-black"
      >
        <img src="./car.webp" alt="car" className="h-12" />
        <div className="w-1/2 flex flex-col">
          <h4 className="flex gap-4 items-center font-semibold">
            UberGo
            <span className="flex gap-1">
              <FaUser /> 4
            </span>
          </h4>
          <h5 className="text-sm">2 mins away</h5>
          <p className="text-xs text-gray-600">Affordable, compact rides</p>
        </div>
        <h2 className="text-lg font-semibold">₹ 193.20</h2>
      </div>
      <div
        onClick={() => setConfirmRidePanel(true)}
        className="flex items-start justify-between p-3 w-full border-2 rounded-xl active:border-black"
      >
        <img src="./bike.webp" alt="car" className="h-12" />
        <div className="w-1/2 flex flex-col">
          <h4 className="flex gap-4 items-center font-semibold">
            Moto
            <span className="flex gap-1">
              <FaUser /> 1
            </span>
          </h4>
          <h5 className="text-sm">3 mins away</h5>
          <p className="text-xs text-gray-600">Affordable motorcycle rides</p>
        </div>
        <h2 className="text-lg font-semibold">₹ 65</h2>
      </div>
      <div
        onClick={() => setConfirmRidePanel(true)}
        className="flex items-start justify-between p-3 w-full border-2 rounded-xl active:border-black"
      >
        <img src="./auto.webp" alt="car" className="h-12" />
        <div className="w-1/2 flex flex-col">
          <h4 className="flex gap-4 items-center font-semibold">
            Uber Auto
            <span className="flex gap-1">
              <FaUser /> 3
            </span>
          </h4>
          <h5 className="text-sm">3 mins away</h5>
          <p className="text-xs text-gray-600">Affordable Auto rides</p>
        </div>
        <h2 className="text-lg font-semibold">₹ 115</h2>
      </div>
    </section>
  );
};

export default VehiclePanel;
