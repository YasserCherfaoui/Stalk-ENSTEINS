import React, { Component } from "react";
import search from "../assets/noun_Search_2475045.svg";
class Explore extends Component {
  render() {
    return (
      <div className="explore">
        <h1>Explore</h1>
        <input type="text" />
        <img src={search} alt="search" />
      </div>
    );
  }
}

export default Explore;
