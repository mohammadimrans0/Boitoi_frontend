import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { FiHeart, FiBookmark } from "react-icons/fi";
import logo from "../../Assets/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md ">
      <nav className="grid grid-cols-3 px-8">
        <div className="flex items-center">
          <Link to="/">
            <div className="flex items-center cursor-pointer">
              <img src={logo} alt="" className="w-24" />
              <h1 className="text-orange-500 text-2xl font-semibold">বইতই</h1>
            </div>
          </Link>
        </div>

        <div>
          <ul
            className={`md:bg-none flex flex-col gap-y-2 justify-center md:flex-row md:justify-center md:gap-8 bg-orange-300 md:bg-inherit absolute md:static p-6 duration-500 ease-in ${
              open ? "left-0" : "left-[-150px]"
            }`}
          >
            <li className="">
              <Link
                to="/all-book"
                className="group text-gray-900 transition duration-300"
              >
                All-Book
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-500"></span>
              </Link>
            </li>
            <li className="">
              <Link
                to="/add-book"
                className="group text-gray-900 transition duration-300"
              >
                Add-Book
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-500"></span>
              </Link>
            </li>
            <li className="">
              <Link
                to="/signup"
                className="group text-gray-900 transition duration-300"
              >
                Sign Up
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-500"></span>
              </Link>
            </li>
            <li className="">
              <Link
                to="/login"
                className="group text-gray-900 transition duration-300"
              >
                Sign In
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-500"></span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center md:justify-end">
          <ul className="flex items-center justify-center gap-3 md:gap-8">
            <li className="text-xl cursor-pointer">
              <FiHeart />
            </li>
            <li className="text-xl cursor-pointer">
              <FiBookmark />
            </li>
          </ul>
        </div>

        <div>
          <div className="md:hidden absolute top-4 right-4 cursor-pointer text-xl">
            {open ? (
              <RxCross1 onClick={() => setOpen(!open)} />
            ) : (
              <RxHamburgerMenu onClick={() => setOpen(!open)} />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
