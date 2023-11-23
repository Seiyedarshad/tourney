import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function NavBar() {
  return (
    <>
      <nav className="nav">
        <a className="Title">ROZA"S Super LIga </a>
        <ul>
          <li>
            <Link to="/Pages/Table1"> Points Table</Link>
          </li>
          <li>
            <Link to="/Pages/GoldenBoot"> Golden Boot</Link>
          </li>
          <li>
            <Link to="/Pages/Knockout"> Knock out Stages</Link>
          </li>
          <li>
            <Link to="/Pages/AddScore"> Add Scores </Link>
          </li>
          <li>
            <Link to="/Pages/Home"> Home</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
