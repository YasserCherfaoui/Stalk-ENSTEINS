import React, { Component } from "react";
import home from "../assets/noun_Home_1315561.svg";
import search from "../assets/noun_Search_2475045.svg";
import ig from "../assets/Group 39.svg";
import heart from "../assets/Union 1.svg";
import p from "../assets/109943543_3420005031367562_7842161415506186964_o.png";
import { connect } from "react-redux";
import { switchTab } from "../actions";
class Footer extends Component {
  clickHandler = (event) => {
    this.props.switcher(event.target.id);
  };
  render() {
    return (
      <div className="footer">
        <div className="ls">
          <img src={home} id="HOME" alt="home" onClick={this.clickHandler} />
          <img
            src={search}
            id="SEARCH"
            alt="search"
            onClick={this.clickHandler}
          />
        </div>
        <div className="ig" id="ADD" onClick={this.clickHandler}>
          <img src={ig} alt="ig" id="ADD" />
        </div>
        <div className="rs">
          <img
            src={heart}
            id="HEART"
            alt="notifications"
            onClick={this.clickHandler}
          />
          <img src={p} id="PROFILE" alt="profile" onClick={this.clickHandler} />
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    switcher: (tab) => dispatch(switchTab(tab)),
  };
};
export default connect(null, mapDispatchToProps)(Footer);
