import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
  const [show, setShow] = useState("top"); // for scroll effect
  const [lastScrollY, setLastScrollY] = useState(0); // up down scroll effect
  const [mobileMenu, setMobileMenu] = useState(false); // ham menu
  const [query, setQuery] = useState(""); // text inp
  const [showSearch, setShowSearch] = useState(""); // for result of search
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header>
      <ContentWrapper>
        <div className="logo">
          <img src="{logo}" alt="logo" />
        </div>
        <ul className="menuItems">
          <li className="menuItem">Movies</li>
          <li className="menuItem">TV Shows</li>
          <li className="menuItem">
            <HiOutlineSearch />
          </li>
        </ul>
      </ContentWrapper>
    </header>
  );
};

export default Header;

// CSS
