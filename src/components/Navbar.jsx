import React from "react";
import reel from "../images/reel.png";
import { Link } from "react-router-dom";
// Navigation bar at top of website
const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 ">
      <div className="flex items-center">
        <Link to="/">
          <img src={reel} alt="Reel logo" className="h-20 cursor-pointer" />
        </Link>
        <Link to="/">
          <h1 className="ml-2 text-xl font-bold font-custom text-teal-600 cursor-pointer">
            ReelReview
          </h1>
        </Link>
      </div>
      <div>
        <Link to="/movie_grid">
          <button className="text-white px-6 py-2 rounded-lg shadow-lg transform transition hover:scale-95 hover:bg-gray-700">
            Films
          </button>
        </Link>
        <button className="text-white px-6 py-2 rounded-lg shadow-lg transform transition hover:scale-95 hover:bg-gray-700">
          Sign in
        </button>
        <button className="bg-teal-600 px-6 py-2 rounded cursor-pointer text-white">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
