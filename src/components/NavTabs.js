import React from "react";
import {Link} from "react-router-dom";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" onClick={() => props.handlePageChange("Home")} className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/about" onClick={() => props.handlePageChange("About")} className="nav-link">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/blog" onClick={() => props.handlePageChange("Blog")} className="nav-link">
          Blog
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" onClick={() => props.handlePageChange("Contact")} className="nav-link">
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;