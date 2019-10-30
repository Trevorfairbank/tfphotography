import React from "react";
import {Link} from "react-router-dom";
import { UncontrolledCollapse, Button, Nav, NavItem } from 'reactstrap';
import "./NavTabsStyle.css";

function NavTabs(props) {
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <Link to="/" onClick={() => props.handlePageChange("Home")} className="nav-link">
          HOME
        </Link>
      </li>
      <div>
    <Button id="toggler" style={{ marginBottom: '1rem'}}>
      PHOTOGRAPHY
    </Button>
    <UncontrolledCollapse toggler="#toggler">
    <Nav pills>
      <div>
        <NavItem>
          <Link className="nav-item-2" to="/product" onClick={() => props.handlePageChange("Product")} active>PRODUCT</Link>
          <Link className="nav-item-2" to="/portrait" onClick={() => props.handlePageChange("Portrait")} active>PORTRAIT</Link>
          <Link className="nav-item-2" to="/food" onClick={() => props.handlePageChange("Food")} active>FOOD</Link>
          <Link className="nav-item-2" to="/wildlife" onClick={() => props.handlePageChange("Wildlife")} active>WILDLIFE</Link>
          <Link className="nav-item-2" to="/landscape" onClick={() => props.handlePageChange("Landscape")} active>LANDSCAPE</Link>
        </NavItem>
      </div>
    </Nav>
    </UncontrolledCollapse>
  </div>
      <li className="nav-item">
        <Link to="/projects" onClick={() => props.handlePageChange("Projects")} className="nav-link">
          PROJECTS
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