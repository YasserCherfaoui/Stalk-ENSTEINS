import React, { Component } from "react";
import add from "../assets/Group 41.svg";
import ensteins from "../assets/Stalk Ensteins.svg";
import messages from "../assets/noun_chat_1079099.svg";
class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <img src={add} alt="add" />
        <img src={ensteins} id="stalk" alt="ensteins" />
        <img src={messages} alt="messages" />
      </div>
    );
  }
}

export default Nav;
