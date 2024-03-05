import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
//Implements movie picture for the "categories" rows
const Movie = ({ item }) => {
  const [like, setLike] = useState([false]);
  return (
    <div class="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        class="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div class="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p class="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item?.title}
        </p>
        <p>
          {like ? (
            <FaHeart class="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart class="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
