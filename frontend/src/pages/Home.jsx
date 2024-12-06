import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { IoIosArrowDown } from "react-icons/io";

const Home = () => {
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);

  const panelRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
       
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
      });
    }
  }, [panelOpen]);

  return (
    <section className="h-screen relative">
      <div>
        <img
          src="./logo.png"
          alt="logo"
          className="w-16 absolute left-5 top-5 opacity-80"
        />
      </div>
      <div className="h-screen w-screen">
        {/* for temporary use */}
        <img src="./hero.gif" alt="heroimage" className="bg-cover size-full" />
      </div>
      <div className="h-screen absolute top-0 w-full flex flex-col justify-end">
        <div className="h-[30%] flex flex-col gap-4 p-5 bg-white relative rounded-l-xl shadow-xl rounded-r-xl">
          {panelOpen && (
            <span
              className="absolute top-6 right-4 text-xl"
              onClick={() => setPanelOpen(!panelOpen)}
            >
              <IoIosArrowDown />
            </span>
          )}
          <h4 className="text-2xl font-semibold">Find a Trip</h4>
          <form onSubmit={handleSubmit}>
            <div className="absolute h-16 w-0.5 bg-gray-900 rounded-full top-20 left-8"></div>
            <input
              onClick={() => setPanelOpen(true)}
              type="text"
              placeholder="Add a pick-up location"
              name="pickUp"
              value={pickUp}
              onChange={(e) => setPickUp(e.target.value)}
              className="bg-[#eeeeee] px-8 py-2 rounded w-full mb-2"
            />
            <input
              onClick={() => setPanelOpen(true)}
              type="text"
              placeholder="Enter your destination"
              name="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eeeeee] px-8 py-2 rounded w-full "
            />
          </form>
        </div>
        <div ref={panelRef} className=" bg-red-400"></div>
      </div>
    </section>
  );
};

export default Home;
