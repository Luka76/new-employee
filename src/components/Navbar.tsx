import { NavLink, Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center my-3 mx-5 shadow-2xl p-2">
      <Link
        className="inline-block text-6xl font-bold
      bg-gradient-to-r from-indigo-500 to-pink-600
      bg-clip-text text-transparent"
        to="/"
      >
        Cadenas
      </Link>
      <div className="flex text-xl p-3 rounded-sm gap-4">
        <p>
          <NavLink
            to="/"
            className={({ isActive }) =>
               `p-2 rounded-md max-sm:hidden ${
              isActive ? "bg-indigo-100 font-bold" : ""
            }
            `}
          >
            Home Page
          </NavLink>
        </p>
        <p>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `p-3 rounded-md max-sm:hidden ${
                isActive ? "bg-pink-100 font-bold" : ""
              }`
            }
          >
            Products Page
          </NavLink>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
