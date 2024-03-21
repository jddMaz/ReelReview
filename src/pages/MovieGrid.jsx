import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const MovieGrid = ({ fetchURL }) => {
  const [movies, setMovies] = useState([]);
  const { pageNumber } = useParams(); // Get the current page number from the URL

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const url = `${fetchURL}&page=${pageNumber}`;
        const response = await axios.get(url);
        setMovies(response.data.results); // Set the movies state with the fetched data
      } catch (error) {
        console.error("Error fetching data: ", error); // Handle any errors in fetching data
      }
    };

    fetchMovies(); // Invoke the function to fetch movies
  }, [fetchURL, pageNumber]);

  return (
    <>
      <div className="flex flex-col justify-center ">
        <div className="grid grid-cols-5 gap-2">
          {movies.map((movie) => (
            <div key={movie.id} className="relative group">
              <img
                className="w-fullmx-auto "
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-80 opacity-0 group-hover:opacity-100 text-white">
                <button
                  className="white-space-normal text-xs md:text-sm font-bold justify-center items-center h-full text-center"
                  onClick={handleShow}
                >
                  {movie.title}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-4 mt-auto pb-4 pt-4">
          <Link to={`/movie_grid/page/${parseInt(pageNumber, 10) - 1}`}>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-500">
              Previous Page
            </button>
          </Link>
          <Link to={`/movie_grid/page/${parseInt(pageNumber, 10) + 1}`}>
            <button className="bg-gray-800 text-white px-6 py-2 rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-500">
              Next Page
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieGrid;
