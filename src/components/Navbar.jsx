import React from "react";
import logo from "../assets/logo1.png";

const Navbar = () => {
  return (
    <div>
      <nav className="py-4">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} />
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a className="text-xl  text-gray-600 hover:underline">Home</a>
            <a className="text-xl  text-gray-600 hover:underline">Flashcard</a>
            <a className="text-xl  text-gray-600 hover:underline">Contact</a>
            <a className="text-xl  text-gray-600 hover:underline">FAQ</a>

            <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full">
              Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
