import { FaClock, FaRupeeSign } from "react-icons/fa";
import { IoMdSpeedometer } from "react-icons/io";
import { LuNotebook } from "react-icons/lu";

const CaptainDetails = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <img
            src="./driverImage.png"
            alt=""
            className="size-12 rounded-full object-cover"
          />
          <h4 className="text-lg">Prem S Gupta</h4>
        </div>
        <div className="text-right">
          <h4 className="text-xl font-semibold flex items-center gap-2">
            <FaRupeeSign />
            <span>295.20</span>
          </h4>
          <p className="text-sm text-gray-600">Earned</p>
        </div>
      </div>
      <div className="flex justify-center p-3 bg-gray-100 rounded-xl gap-5 mt-6 items-start">
        <div className="flex flex-col gap-1 items-center">
          <FaClock className="text-2xl" />
          <h5 className="">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <IoMdSpeedometer className="text-2xl" />
          <h5 className=" ">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <LuNotebook className="text-2xl" />
          <h5 className="">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
      </div>
    </>
  );
};

export default CaptainDetails;
