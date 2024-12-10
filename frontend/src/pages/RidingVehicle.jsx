import { LuCircleDollarSign, LuHouse, LuMapPinCheck } from "react-icons/lu";
import { Link } from "react-router-dom";

const RidingVehicle = () => {
  return (
    <section className="h-screen">
      <Link to={"/home"} className="fixed right-2 top-2 bg-white rounded-full text-lg p-2">
        <LuHouse />
      </Link>
      <div className="h-1/2 w-screen">
        {/* for temporary use */}
        <img src="./hero.gif" alt="heroimage" className="bg-cover size-full" />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img src="./car.webp" alt="confirm Ride Image" className="h-12" />
          <div className="text-right">
            <h2 className=" ">Prem</h2>
            <h4 className="text-lg -mt-1 -mb-1 font-semibold">PR 5 2678</h4>
            <p className="text-xs text-gray-500">Neta EV</p>
          </div>
        </div>
        <section className="flex flex-col justify-between items-center gap-2 mt-4 p-2">
          <div className="w-full flex flex-col gap-4 justify-center">
            <div className="flex items-center gap-5 p-3  border-b-2">
              <LuMapPinCheck className="text-xl" />
              <div className="flex flex-col">
                <h3 className="font-semibold">Manigram Chowk</h3>
                <p className="text-xs text-gray-600 -mt-1">
                  Tilottama 12, Rupandehi
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-3">
              <LuCircleDollarSign className="text-xl" />
              <div className="flex flex-col">
                <h3 className="font-semibold">₹ 193.20</h3>
                <p className="text-xs text-gray-600 -mt-1">Cash</p>
              </div>
            </div>
          </div>
        </section>
        <button className="px-5 w-full font-semibold py-2 bg-emerald-600 text-white rounded mt-4">
          Make a Payment
        </button>
      </div>
    </section>
  );
};

export default RidingVehicle;
