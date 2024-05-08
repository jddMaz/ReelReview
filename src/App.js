import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Films from "./pages/Films";
import requests from "./Requests";
import Description from "./pages/Description";
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
          path="/films"
          element={<Navigate replace to="/films/page/1" />}
        />
        <Route
          path="/films/page/:pageNumber"
          element={<Films fetchURL={requests.requestMovie} />}
        />
        <Route path="/films/description/:movieId" element={<Description />} />
      </Routes>
    </>
  );
}

export default App;
