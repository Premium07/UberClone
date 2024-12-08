import { LuMapPin } from "react-icons/lu";

const LocationSearchPanel = ({
  vehiclePanelOpen,
  setVehiclePanelOpen,
  panelOpen,
  setPanelOpen,
}) => {
  const locations = [
    "Pharsatikar Chowk, Suddhodhan 4, Rupandehi",
    "Lumbini Gate, Buddha Chowk, Bhairahawa",
    "Near XYZ consultancy, MilanChowk, Butwal",
    "ABC Futsal Complex, Manigram",
  ];
  return (
    <section className="flex flex-col gap-2 justify-center">
      {/* These are just temporary locations. */}

      {locations.map((location, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              setVehiclePanelOpen(!vehiclePanelOpen);
              setPanelOpen(!panelOpen);
            }}
            className="flex items-center gap-4 justify-start border-2 p-3 rounded-lg border-gray-100 active:border-black"
          >
            <h2 className="rounded bg-[#eee] p-2 size-10 flex items-center justify-center">
              <LuMapPin />
            </h2>
            <h4 className="text-sm font-semibold">{location}</h4>
          </div>
        );
      })}
    </section>
  );
};

export default LocationSearchPanel;
