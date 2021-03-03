import React, { Component } from "react";
import "./App.css";
import top from "./assets/Component 11 – 2.svg";
import Explore from "./Components/Explore";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Posts from "./Components/Posts/Posts";
import Stories from "./Components/Story/Stories";
import { connect } from "react-redux";
import Profile from "./Components/Profile";
import image from "./assets/pp.png";
import SignIn from "./Components/auth/SignIn";
class App extends Component {
  state = {
    position: this.props.currentPosition,
  };

  render() {
    const { currentPosition, auth } = this.props;
    return (
      <React.Fragment>
        <div className={"App"}>
          <div id="top">
            <img src={top} alt="top" />
          </div>
          <SignIn hidden={auth === null ? false : true} />
          <div hidden={auth === null ? true : false}>
            {currentPosition === "HOME" && (
              <React.Fragment>
                <Nav />
                <Stories />
                <Explore />
                <Posts />
              </React.Fragment>
            )}
            <Profile
              hidden={currentPosition !== "PROFILE" ? true : false}
              user={{ name: "YasserCherfaoui", pic: image }}
            />
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  currentPosition: state.app.position,
  auth: state.user.currentUser,
});
export default connect(mapStateToProps)(App);
