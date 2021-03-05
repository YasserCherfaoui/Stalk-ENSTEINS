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

class App extends Component {
  state = {
    position: this.props.currentPosition,
  };

  render() {
    const { currentPosition, user, loading } = this.props;

    return loading ? (
      <div></div>
    ) : (
      <React.Fragment>
        <div className={"App"}>
          <div id="top">
            <img src={top} alt="top" />
          </div>

          <div>
            {currentPosition === "HOME" && (
              <React.Fragment>
                <Nav />
                <Stories me={user} />
                <Explore />
                <Posts />
              </React.Fragment>
            )}
            <Profile
              hidden={currentPosition !== "PROFILE" ? true : false}
              user={user}
            />
            <Footer me={user} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  currentPosition: state.app.position,
  user: state.user.currentUser,
  loading: state.user.isLoading,
});
export default connect(mapStateToProps)(App);
