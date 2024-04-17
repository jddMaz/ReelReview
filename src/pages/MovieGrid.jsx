import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import requests from "../Requests";

const MovieGrid = ({ fetchURL }) => {
  const [movies, setMovies] = useState([]); //State for managing the list of movies
  const { pageNumber } = useParams(); // Get the current page number from the URL
  const navigate = useNavigate(); //Hook to navigate between pages
  const [searchQuery, setSearchQuery] = useState(""); //Manages search query

  useEffect(() => {
    fetchGenre();
  }, []);

  //Function to navigate to previous page
  const goToPreviousPage = () => {
    const newPageNumber = Math.max(parseInt(pageNumber, 10) - 1, 1);
    navigate(`/movie_grid/page/${newPageNumber}`);
  };

  //Function to navigate to next page
  const goToNextPage = () => {
    const newPageNumber = parseInt(pageNumber, 10) + 1;
    navigate(`/movie_grid/page/${newPageNumber}`);
  };

  //Function to handle movie search
  const handleSearchClick = () => {
    fetchMovies(searchQuery);
  };

  //Function to fetch movies from the API
  const fetchMovies = async (query = "") => {
    try {
      let url = "";
      //If search option is used
      if (query) {
        //URL for search
        url = `${requests.requestSearch}&query=${query}`;
      } //Else just display movies from request
      else {
        //URL for regular movie fetch
        url = `${fetchURL}&page=${pageNumber}`;
      }
      const response = await axios.get(url);
      //Filters movies without posters
      const moviesWithPosters = response.data.results.filter(
        (movie) => movie.poster_path !== null
      );
      setMovies(moviesWithPosters); //Update state with the fetch movies
    } catch (error) {
      console.error("Error fetching or searching for movies: ", error);
    }
  };

  // useEffect hook to fetch movies when the component mounts or the page number changes
  useEffect(() => {
    fetchMovies(); // Call function to fetch movies
  }, [fetchURL, pageNumber]);

  return (
    <>
      {/*Search Container*/}
      <div className=" mx-auto py-2 ">
        <div className=" flex justify-end">
          <div className="w-full max-w-xs">
            <input
              type="text"
              placeholder="Search for a movie..."
              className="appearance-none rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              onClick={handleSearchClick()}
              className="absolute inset-y-0 right-0 rounded-full px-4 flex items-center"
            ></button>
          </div>
        </div>
      </div>
      {/*Search Container*/}
      {/*Movie Grid*/}
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-5 gap-4  mx-10">
          {movies.map((movie) => (
            <div key={movie.id} className="relative group">
              <img
                className="w-fullmx-auto "
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-80 opacity-0 group-hover:opacity-100 text-white">
                <button className="white-space-normal text-xs md:text-sm font-bold justify-center items-center h-full text-center">
                  {movie.title}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-4 mt-auto pb-4 pt-4">
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-500"
            onClick={goToPreviousPage}
            disabled={pageNumber <= 1} // Disable button if the page number is 1
          >
            Previous Page
          </button>
          <button
            className="bg-gray-800 text-white px-6 py-2 rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-500"
            onClick={goToNextPage}
          >
            Next Page
          </button>
        </div>
      </div>
      {/*Movie Grid*/}
    </>
  );
};

export default MovieGrid;
