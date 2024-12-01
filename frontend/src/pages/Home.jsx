import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="w-full flex justify-between pt-8 flex-col h-screen bg-[url(./bg.avif)] bg-cover bg-center">
      <img src="./logo.png" alt="logo" className="w-16 ml-8" />
      <div className="bg-white pb-6 p-4">
        <h2 className="text-3xl font-bold ">Get Started with Uber</h2>
        <Link
          to={"/login"}
          className="w-full flex items-center justify-center bg-black py-3 text-white rounded mt-5"
        >
          Continue
        </Link>
      </div>
    </section>
  );
};

export default Home;
