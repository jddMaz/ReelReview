import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import requests from "../Requests";

const Description = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const movie = location.state?.movie;
  const [reviews, setReviews] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewUrl = requests.requestReview.replace("{movie_id}", movieId);
      const response = await fetch(reviewUrl);
      const data = await response.json();
      setReviews(data.results || []);
    };

    const fetchRecommendations = async () => {
      const recommendationsUrl = requests.requestRecommendations.replace(
        "{movie_id}",
        movieId
      );
      const response = await fetch(recommendationsUrl);
      const data = await response.json();
      setRecommendations(data.results || []);
    };

    const fetchVideos = async () => {
      const videoUrl = requests.requestVideos.replace("{movie_id}", movieId);
      const response = await fetch(videoUrl);
      const data = await response.json();
      setVideos(data.results || []);
    };

    if (movieId) {
      fetchReviews();
      fetchRecommendations();
      fetchVideos();
    }
  }, [movieId]);

  console.log(movieId);

  return (
    <div className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-start mb-8">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
          className="w-full md:w-1/3 lg:w-1/4 shadow-lg"
        />
        <div className="mt-4 md:mt-0 md:ml-8 flex-grow">
          <h1 className="text-3xl font-bold">
            {movie.title} ({new Date(movie.release_date).getFullYear()})
          </h1>
          <div className="flex items-center mt-4">
            <span className="block text-lg">User Score</span>
            <span className="ml-2 w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">
              {Math.round(movie.vote_average * 10)}%
            </span>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-bold">Overview</h2>
            <p className="mt-2">{movie.overview}</p>
          </div>
        </div>
      </div>

      {/* Review container */}
      <div className="container mx-auto p-4 bg-gray-700 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        {reviews.length > 0 ? (
          showAllReviews ? (
            reviews.map((review) => (
              <div key={review.id} className="bg-gray-600 p-4 rounded-lg mt-4">
                <p className="font-bold">{review.author}</p>
                <p>{review.content}</p>
              </div>
            ))
          ) : (
            <div className="bg-gray-600 p-4 rounded-lg">
              <p className="font-bold">{reviews[0].author}</p>
              <p>{reviews[0].content}</p>
            </div>
          )
        ) : (
          <p>No reviews available.</p>
        )}
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowAllReviews(!showAllReviews)}
        >
          {showAllReviews ? "Show Less" : "Read All Reviews"}
        </button>
      </div>
      {/*Review Container*/}

      {/* Video Container */}
      <div>
        <h2 className="text-xl font-bold mt-4 mb-2">Videos</h2>
        <div className="flex overflow-x-auto py-2 space-x-4">
          {videos.map((video) => (
            <div key={video.id} className="min-w-max">
              {video.site === "YouTube" && (
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${video.key}`}
                  title={video.name}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Video Container */}

      {/* Recommendations section with horizontal scrolling */}
      <div className="container mx-auto p-4 bg-gray-700 rounded-lg mt-8">
        <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
        <div className="flex overflow-x-auto pb-4 space-x-4">
          {recommendations.length > 0 ? (
            recommendations.map((recommendation) => (
              <Link
                key={recommendation.id}
                to={`/films/description/${recommendation.id}`}
                state={{ movie: recommendation }}
                className="min-w-max"
              >
                <div className="bg-gray-600 p-4 rounded-lg shadow-lg">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${recommendation.poster_path}`}
                    alt={recommendation.title}
                    className="w-64 h-auto rounded-lg shadow-lg"
                  />
                  <p className="text-center mt-2">{recommendation.title}</p>
                  <p className="text-center text-sm">
                    {Math.round(recommendation.vote_average * 10)}%
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p className="ml-4">No recommendations available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Description;
