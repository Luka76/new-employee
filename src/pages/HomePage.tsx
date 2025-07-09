import { Link } from "react-router";
const HomePage = () => {
  return (
    <div
      className="flex-1 w-screen overflow-hidden bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className=" flex flex-col gap-2 bg-white bg-opacity-80 p-10 rounded-2xl shadow-xl text-center max-w-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to My Test work
        </h1>
        <h3>Done by me, Luka Varga</h3>
        <p className="text-lg text-gray-700">
          Start your journey here by exploring our products page.
        </p>
        <Link
          to="/products"
          className="font-bold text-2xl rounded-3xl bg-[#EEEEEE] color-[#333333] px-2 py-6 border-x-[#CCCC]"
        >
          Let's go
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
