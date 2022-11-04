import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="topnav">
      <Link to="/">
          <button className="button1">HOME</button>
        <h1 className="heading">
          BLOG POST APP
        </h1>
      </Link>
    </div>
  );
};

export default Header;
