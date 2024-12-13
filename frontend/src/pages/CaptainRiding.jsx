import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [finishRidePanel]);

  return (
    <section className="h-screen">
      <div className="fixed p-5 top-0 flex items-center justify-between w-full">
        <Link to={"/captain-home"} className="">
          <img src="./driver.webp" alt="logo" className="w-12" />
        </Link>
        <Link
          to={"/captain-login"}
          className="bg-white rounded-full text-lg p-2"
        >
          <LuLogOut />
        </Link>
      </div>
      <div className="h-4/5 w-screen">
        {/* for temporary use */}
        <img src="./hero.gif" alt="heroimage" className="bg-cover size-full" />
      </div>
      <section
        className="h-1/5 w-full p-5 flex flex-col justify-between items-center bg-gray-200"
        onClick={() => {
          setFinishRidePanel((prev) => !prev);
        }}
      >
        <div className="text-xl border border-gray-300 text-gray-500 rounded-full flex items-center justify-center mb-2">
          <IoIosArrowUp />
        </div>
        <div className="flex items-center justify-between w-full">
          <h4 className="text-lg font-semibold">4 km Away</h4>
          <button className="bg-emerald-700 text-white py-3 px-10 rounded-lg">
            Complete Ride
          </button>
        </div>
      </section>
      <section
        ref={finishRidePanelRef}
        className="fixed z-10 bottom-0 bg-white px-3 translate-y-full py-6 pt-12 w-full flex flex-col gap-2"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </section>
    </section>
  );
};

export default CaptainRiding;
