import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  return (
    <Fragment>
      {/* <nav className="nav-extended blue lighten-2">
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo yellow-text" style={{marginLeft:'20px'}}>
            Memes
          </a>
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons ">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down teal ">
            <li>
              <Link to="/">All Memes</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav green lighten-5" id="mobile-demo">
        <li>
          <Link to="/">All Memes</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul> */}
      <nav className="red" style={{ padding: "0px 10px" }}>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">
            Memes
          </a>

          <a href="#!" className="sidenav-trigger" data-target="mobile-nav">
            <i className="material-icons">menu</i>
          </a>

          <ul className="right hide-on-med-and-down ">
            <li>
              <Link to="/">All Memes</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav red lighten-3" id="mobile-nav">
        <li>
          <Link to="/">All Memes</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default SearchBar;
