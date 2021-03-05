/* eslint-disable default-case */
import React, { Component } from "react";
import persons from "../../assets/User Profile_Monochromatic.svg";
import google from "../../assets/google.svg";
import apple from "../../assets/Path 1903.svg";
import mail from "../../assets/mail.svg";
import eye from "../../assets/show.svg";
import person from "../../assets/user.svg";
import firebase from "../../firebase";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";
import top from "../../assets/Component 11 – 2.svg";
import { params } from "./SignIn";
import md5 from "md5";
import loading from "../../assets/spinner.svg";
class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    usersRef: firebase.database().ref("users"),
    loading: false,
    errors: [],
  };
  handleLogin = () => {};
  handleInputs = (event) => {
    switch (event.target.name) {
      case "user":
        this.setState({ username: event.target.value, errors: [] });
        break;
      case "email":
        this.setState({ email: event.target.value, errors: [] });
        break;
      case "password":
        this.setState({ password: event.target.value, errors: [] });
        break;
    }
  };
  handleRegister = (event) => {
    if (this.isFormValid()) {
      event.preventDefault();
      this.setState({ errors: [], loading: true });
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((createdUser) => {
          createdUser.user
            .updateProfile({
              displayName: this.state.username,
              photoURL: `http://gravatar.com/avatar/${md5(
                createdUser.user.email
              )}?d=identicon`,
            })
            .then(() => {
              this.saveUser(createdUser).then(() => {
                console.log("user saved");
              });
              this.setState({ loading: false });
            })
            .catch((err) => {
              console.log(err);
              this.setState({
                errors: this.state.errors.concat(err),
                loading: false,
              });
            });
        })
        .catch((error) => {
          this.setState({
            loading: false,
            errors: this.state.errors.concat(error),
          });
          console.log(error);
        });
    } else {
      console.log("error");
    }
  };
  isFromENST = (email) => {
    return email.includes("@enst.dz");
  };
  isFormEmpty = ({ username, email, password }) => {
    return !username.length || !email.length || !password.length;
  };
  isPasswordValid = ({ password }) => {
    return password.length >= 8;
  };
  isFakeAdmin = ({ username }) => {
    return username.includes("admin") || username.includes("master");
  };
  isFormValid = () => {
    let errors = [];
    let error;
    if (this.isFormEmpty(this.state)) {
      error = { message: "Fill in all fields" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else if (!this.isPasswordValid(this.state)) {
      error = { message: "Password must be at least 8" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else if (this.isFakeAdmin(this.state)) {
      error = { message: "Don't try to be a fake admin :)" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else if (!this.isFromENST(this.state.email)) {
      error = { message: "Use your school email" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else {
      return true;
    }
  };
  saveUser = (user) => {
    return this.state.usersRef.child(user.user.uid).set({
      name: user.user.displayName,
      avatar: user.user.photoURL,
    });
  };
  showErrors = (errs) => {
    return errs.map((err, i) => <p key={i}>⚪{err.message}</p>);
  };
  render() {
    return (
      <div className="signIn" hidden={this.props.hidden}>
        <div id="top">
          <img src={top} alt="top" />
        </div>
        <Particles params={params} className="particles" />
        <img src={persons} alt="persons" id="persons" />
        <div id="jtt">JOIN THE TEAM</div>
        <div id="ca">Create Account</div>
        <div className="signin_methods r">
          <button>
            <img src={google} alt="google" />
            Register with Google
          </button>
          <button>
            <img src={apple} alt="apple" />
            Register with Apple
          </button>
        </div>
        <div id="ocue">Or Create Using Email</div>
        <div className="signin_inputs re">
          <input
            type="text"
            name="user"
            placeholder="YasserCherfaoui"
            onChange={this.handleInputs}
          />
          <img src={person} alt="mail" />
          <input
            name="email"
            type="email"
            placeholder="example@enst.dz"
            onChange={this.handleInputs}
          />
          <img src={mail} alt="mail" />
          <input
            name="password"
            type="password"
            placeholder="*******"
            onChange={this.handleInputs}
          />
          <img src={eye} alt="eye" />
          <button onClick={this.handleRegister} disabled={this.state.loading}>
            {this.state.loading ? (
              <img src={loading} id="loading" alt="loading" />
            ) : (
              <p>Register</p>
            )}
          </button>
        </div>
        {this.state.errors.length > 0 && (
          <div className="errors">{this.showErrors(this.state.errors)}</div>
        )}

        <div className="dha reg">
          Already a Team Member?{" "}
          <span>
            <Link to="/login">LOG IN</Link>
          </span>
        </div>
      </div>
    );
  }
}

export default Register;
