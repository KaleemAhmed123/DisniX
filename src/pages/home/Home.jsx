import React from "react";
import "./style.scss";

import HeroBanner from "../home/heroBanner/HeroBanner";
import Trending from "./trending/Trending";

const Home = () => {
  return (
    <>
      <div style={{ height: 1000 }}>
        <HeroBanner />
        <Trending />
      </div>
    </>
  );
};

export default Home;
