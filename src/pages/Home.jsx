import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="navigation">
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/creatorstype">CreatorsType</Link>
        </li>
        <li>
          <Link to="/home1">Home1</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/tvshow">TVShow</Link>
        </li>
        <li>
          <Link to="/creators">Creators</Link>
        </li>
        <li>
          <Link to="/detailsone">DetailsOne</Link>
        </li>
        <li>
          <Link to="/detailstwo">DetailsTwo</Link>
        </li>
        <li>
          <Link to="/detailsvenomn">DetailsVenomn</Link>
        </li>
        <li>
          <Link to="/player">Player</Link>
        </li>
        <li>
          <Link to="/watchlist">Watchlist</Link>
        </li>
        <li>
          <Link to="/notification">Notification</Link>
        </li>
        <li>
          <Link to="/termsconditions">TermsConditions</Link>
        </li>
        <li>
          <Link to="/privacy">Privacy</Link>
        </li>
        <li>
          <Link to="/disclaimer">Disclaimer</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/homemenu">Homemenu</Link>
        </li>
      
        <li>
          <Link to="/membership">Membership</Link>
        </li>
        <li>
          <Link to="/businessplan">Businessplan</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
