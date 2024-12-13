import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopup from "../components/RidePopup";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopup from "../components/ConfirmRidePopup";

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);
  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupPanelRef = useRef(null);

  useGSAP(() => {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(ridePopupPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [ridePopupPanel]);

  useGSAP(() => {
    if (confirmRidePopupPanel) {
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePopupPanel]);

  return (
    <section className="h-screen">
      <div className="fixed p-6 top-0 flex items-center justify-between w-full">
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
      <div className="h-3/5 w-screen">
        {/* for temporary use */}
        <img src="./hero.gif" alt="heroimage" className="bg-cover size-full" />
      </div>
      <section className="h-2/5 p-6">
        <CaptainDetails />
      </section>
      <section
        ref={ridePopupPanelRef}
        className="fixed z-10 bottom-0 bg-white px-3 translate-y-full py-6 pt-12 w-full flex flex-col gap-2"
      >
        <RidePopup
          ridePopupPanel={ridePopupPanel}
          setRidePopupPanel={setRidePopupPanel}
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
        />
      </section>
      <section
        ref={confirmRidePopupPanelRef}
        className="fixed z-10 bottom-0 h-screen bg-white px-3 translate-y-full py-6 pt-12 w-full flex flex-col gap-2"
      >
        <ConfirmRidePopup
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          setRidePopupPanel={setRidePopupPanel}
        />
      </section>
    </section>
  );
};

export default CaptainHome;
