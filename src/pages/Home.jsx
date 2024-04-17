import React from "react";

import Hero from "../components/Hero";
import Row from "../components/Row";
import requests from "../Requests";
//Home page is the first page the users will see
const Home = () => {
  return (
    <>
      <Hero />
      <Row
        rowID="1"
        title="Now Playing"
        fetchURL={requests.requestNowPlaying}
      />
      <Row rowID="2" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="3" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
    </>
  );
};

export default Home;
