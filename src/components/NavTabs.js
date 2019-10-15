import React from "react";
import {Link} from "react-router-dom";
import "./NavTabsStyle.css";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" onClick={() => props.handlePageChange("Home")} className="nav-link">
          HOME
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/product" onClick={() => props.handlePageChange("Product")} className="nav-link">
          PRODUCT
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/portrait" onClick={() => props.handlePageChange("Portait")} className="nav-link">
          PORTRAIT
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/food" onClick={() => props.handlePageChange("Food")} className="nav-link">
          FOOD
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/wildlife" onClick={() => props.handlePageChange("Wildlife")} className="nav-link">
          WILDLIFE
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/landscape" onClick={() => props.handlePageChange("Landscape")} className="nav-link">
          LANDSCAPE
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/projects" onClick={() => props.handlePageChange("Projects")} className="nav-link">
          PROJECTS
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/instagram" onClick={() => props.handlePageChange("Instagram")} className="nav-link">
          INSTAGRAM
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/about" onClick={() => props.handlePageChange("About")} className="nav-link">
          ABOUT
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" onClick={() => props.handlePageChange("Contact")} className="nav-link">
          CONTACT
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;