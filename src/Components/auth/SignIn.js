import React, { Component } from "react";
import logo from "../../assets/Fichier 1.svg";
import google from "../../assets/google.svg";
import apple from "../../assets/Path 1903.svg";
import logoText from "../../assets/ENSTEINS.svg";
import mail from "../../assets/mail.svg";
import eye from "../../assets/show.svg";
import Particles from "react-particles-js";
import { connect } from "react-redux";
import { setUser } from "../../actions";
import "./auth.css";
import top from "../../assets/Component 11 – 2.svg";
import { Link } from "react-router-dom";
import firebase from "../../firebase";
import loading from "../../assets/spinner.svg";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    loading: false,
    errors: [],
    shown: false,
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value, errors: [] });
  };
  showErrors = (errs) => {
    return errs.map((err, i) => <p key={i}>⚪{err.message}</p>);
  };
  handleLogin = (event) => {
    const { email, password } = this.state;
    event.preventDefault();
    if (this.isFormValid(this.state)) {
      this.setState({ errors: [], loading: true });
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log("");
        })
        .catch((err) => {
          this.setState({
            errors: this.state.errors.concat(err),
            loading: false,
          });
        });
    } else {
      console.log("error");
    }
  };
  viewPassword = (event) => {
    this.setState({ shown: !this.state.shown });
    if (this.state.shown) {
      document.getElementsByName("password")[0].type = "password";
    } else {
      document.getElementsByName("password")[0].type = "text";
    }
  };
  isFormValid = ({ email, password }) => email && password;
  render() {
    return (
      <React.Fragment>
        <div className="signIn">
          <div id="top">
            <img src={top} alt="top" />
          </div>
          <Particles params={params} className="particles" />
          <img id="AppLogo" src={logo} alt="ENSTEINS" />
          <img id="LogoText" src={logoText} alt="ENSTEINS" />
          <div id="wb">WELCOME BACK</div>
          <div id="ali">Account Log In</div>
          <div className="signin_methods">
            <button>
              <img src={google} alt="google" />
              Log In with Google
            </button>
            <button>
              <img src={apple} alt="apple" />
              Log In with Apple
            </button>
          </div>
          <div id="lwom">Or Log In Using Email</div>
          <div className="signin_inputs">
            <input
              name="email"
              type="email"
              placeholder="example@enst.dz"
              onChange={this.handleChange}
            />
            <img src={mail} alt="mail" />
            <input
              name="password"
              type="password"
              placeholder="*******"
              onChange={this.handleChange}
            />
            <img src={eye} alt="eye" onClick={this.viewPassword} />
            <button onClick={this.handleLogin} disabled={this.state.loading}>
              {" "}
              {this.state.loading ? (
                <img src={loading} id="loading" alt="loading" />
              ) : (
                <p>Continue</p>
              )}
            </button>
          </div>
          <div className="dha">
            Don’t have an Account?{" "}
            <span>
              <Link to="/register"> REGISTER </Link>
            </span>
          </div>
          {this.state.errors.length > 0 && (
            <div className="errors s">{this.showErrors(this.state.errors)}</div>
          )}
        </div>
      </React.Fragment>
    );
  }
}
export const params = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: false,
      },
    },
    size: {
      value: 10,
      random: true,
    },
    move: {
      direction: "bottom",
      out_mode: "out",
    },
    line_linked: {
      enable: false,
    },
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "remove",
      },
    },
    modes: {
      remove: {
        particles_nb: 10,
      },
    },
  },
};
const mapDispatchToProps = (dispatch) => {
  return {
    user: (userId) => dispatch(setUser(userId)),
  };
};
export default connect(null, mapDispatchToProps)(SignIn);
