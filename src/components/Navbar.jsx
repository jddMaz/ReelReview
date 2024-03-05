import React from "react";
import reel from "../images/reel.png";
// Navigation bar at top of website
const Navbar = () => {
  return (
    <div class="flex items-center justify-between p-4 ">
      <div class="flex items-center">
        <img src={reel} alt="Reel logo" class="h-20" />
        <h1 class="ml-2 text-xl font-bold font-custom text-teal-600">
          ReelReview
        </h1>
      </div>
      <div>
        <button class="text-white pr-4">Sign in</button>
        <button class="bg-teal-600 px-6 py-2 rounded cursor-pointer text-white">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
