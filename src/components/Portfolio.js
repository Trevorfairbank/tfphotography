import React, { Component } from "react";
import {BrowserRouter as Router, Route } from "react-router-dom"; 
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Portrait from "./pages/Portrait";
import Food from "./pages/Food";
import Wildlife from "./pages/Wildlife";
import Landscape from "./pages/Landscape";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

var font = {
  fontFamily: "AppleSDGothicNeo-Bold",
  paddingLeft: "20px"
}


class Portfolio extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };


  render() {
    return (
      <Router>
      <br/>
      <div>
      <h1 style={font}>TREVOR DAVID FAIRBANK</h1>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        <Route exact path="/" component={Home} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/portrait" component={Portrait} />
        <Route exact path="/food" component={Food} />
        <Route exact path="/wildlife" component={Wildlife} />
        <Route exact path="/landscape" component={Landscape} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </div>
      </Router>
    );
  }
}

export default Portfolio;