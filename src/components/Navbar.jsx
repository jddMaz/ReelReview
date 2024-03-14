import React from "react";
import reel from "../images/reel.png";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

// Navigation bar at top of website
const Navbar = () => {
  const { user, logOut } = UserAuth();
//console.log(user.email)

  return (
    <div class="flex items-center justify-between p-4 ">
      <div class="flex items-center">
        <img src={reel} alt="Reel logo" class="h-20" />
        <h1 class="ml-2 text-xl font-bold font-custom text-teal-600">
          ReelReview
        </h1>
      </div>
      <div>
        <Link to="/login" class="text-teal-600 pr-4">
          <button class="text-white pr-4">Sign in</button>
        </Link>
        <Link to="/signup" class="text-teal-600">
        <button class="bg-teal-600 px-6 py-2 rounded cursor-pointer text-white">
          Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
