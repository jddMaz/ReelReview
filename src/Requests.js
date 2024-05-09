//Saves key for future reference and saved requests are below
const key = "06a334dd29c2d53f37b2d8aae2b6a053";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
  requestMovie: `https://api.themoviedb.org/3/discover/movie?api_key=${key}`,
  requestSearch: `https://api.themoviedb.org/3/search/movie?api_key=${key}`,
  requestReview: `https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=${key}&language=en-US`,
  requestRecommendations: `https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key=${key}&language=en-US`,
  requestVideos: `https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=${key}&language=en-US`,
  requestGenre: `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`,
};

export default requests;
