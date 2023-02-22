import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/usefetch";
import "./style.scss";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch("/movie/upcoming");

  // for random banner
  useEffect(() => {
    const bgUrl =
      url.backdrop +
      data?.result[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bgUrl);
  }, [data]);

  // for search query
  const searchQueryHandle = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      <div className="wrappeer">
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>

          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or TV show....."
              onKeyUp={() => searchQueryHandle}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
