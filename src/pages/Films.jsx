import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import requests from "../Requests";

const Films = ({ fetchURL }) => {
  const [movies, setMovies] = useState([]); //State for managing the list of movies
  const { pageNumber } = useParams(); // Get the current page number from the URL
  const navigate = useNavigate(); //Hook to navigate between pages
  const [searchQuery, setSearchQuery] = useState(""); //Manages search query
  const [genres, setGenres] = useState([]); //State for managing genres
  const [selectedGenre, setSelectedGenre] = useState(""); //Manages selected genre

  //Function to navigate to previous page
  const goToPreviousPage = () => {
    const newPageNumber = Math.max(parseInt(pageNumber, 10) - 1, 1);
    navigate(`/films/page/${newPageNumber}`);
  };

  //Function to navigate to next page
  const goToNextPage = () => {
    const newPageNumber = parseInt(pageNumber, 10) + 1;
    navigate(`/films/page/${newPageNumber}`);
  };

  //Function to fetch genre
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(requests.requestGenre);
        setGenres(response.data.genres);
      } catch (error) {
        console.error("Error fetching genres: ", error);
      }
    };
    fetchGenres();
  }, []);

  //Function to fetch movies from the API
  const fetchMovies = async (query = "", genre = selectedGenre) => {
    try {
      let url = "";

      // If search query is provided
      if (query) {
        url = `${requests.requestSearch}&query=${query}&page=${pageNumber}`;
      } else if (genre) {
        // If only gnre is provided
        url = `${fetchURL}&with_genres=${genre}&page=${pageNumber}`;
      } else {
        // If neither is provided, just display movies for the current page
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
    console.log(movies);
  };

  //Function to handle movie search
  const handleSearchClick = () => {
    console.log(`Searching for: ${searchQuery}`); // Debug: Log the search query

    fetchMovies(searchQuery, selectedGenre);
  };

  // useEffect hook to fetch movies when the component mounts or the page number changes
  useEffect(() => {
    fetchMovies("", selectedGenre); // Call function to fetch movies
  }, [fetchURL, pageNumber, selectedGenre]);

  return (
    <>
      <div className="flex items-center justify-between py-2 mx-10">
        {/* Genre Selection */}
        <div className="flex-grow mr-4">
          <select
            className="bg-teal-600 text-white rounded-lg p-2 w-full md:w-auto text-sm"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="">Select a genre</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>

        {/* Search Container */}
        <div className="flex-grow relative max-w-md">
          <input
            type="text"
            placeholder="Search for a movie..."
            className="bg-gray-800 text-white appearance-none rounded-full w-full p-2 text-sm leading-tight"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            onClick={handleSearchClick}
            className="absolute inset-y-0 right-0 rounded-full p-2 flex items-center justify-center text-sm"
          ></button>
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
                <Link
                  to={`/films/description/${movie.id}`}
                  state={{ movie: movie }}
                  className="text-xs md:text-sm font-bold w-full h-full flex justify-center items-center text-center text-white no-underline"
                >
                  {movie.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-4 mt-auto pb-4 pt-4">
          <button
            className="bg-teal-600 text-white px-4 py-2 rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-500"
            onClick={goToPreviousPage}
            disabled={pageNumber <= 1} // Disable button if the page number is 1
          >
            Previous Page
          </button>
          <button
            className="bg-teal-600 text-white px-6 py-2 rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-500"
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

export default Films;
