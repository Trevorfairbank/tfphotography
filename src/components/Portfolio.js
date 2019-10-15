import React, { Component } from "react";
import {BrowserRouter as Router, Route } from "react-router-dom"; 
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

var font = {
  fontFamily: "Arial",
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
    <div><br/><h1 style={font}>TREVOR DAVID FAIRBANK</h1></div>
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
      </div>
      </Router>
    );
  }
}

export default Portfolio;