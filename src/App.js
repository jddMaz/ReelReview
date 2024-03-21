import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieGrid from "./pages/MovieGrid";
import requests from "./Requests";
import { Route, Routes, Navigate } from "react-router-dom";
import "./css/App.css";
//Builds all components and pages together
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/movie_grid"
          element={<Navigate replace to="/movie_grid/page/1" />}
        />
        <Route
          path="/movie_grid/page/:pageNumber"
          element={<MovieGrid fetchURL={requests.requestMovie} />}
        />
      </Routes>
    </>
  );
}

export default App;
