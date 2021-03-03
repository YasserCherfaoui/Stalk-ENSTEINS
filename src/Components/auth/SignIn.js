import React, { Component } from "react";
import logo from "../../assets/Fichier 1.svg";
import google from "../../assets/google.svg";
import apple from "../../assets/Path 1903.svg";
import logoText from "../../assets/ENSTEINS.svg";
import mail from "../../assets/mail.svg";
import eye from "../../assets/show.svg";
import Register from "./Register";
class SignIn extends Component {
  state = {
    register: false,
  };
  handleRegister = () => {
    this.setState({
      register: true,
    });
  };
  render() {
    return (
      <React.Fragment>
        <Register hidden={this.state.register ? false : true} />
        <div className="signIn" hidden={this.state.register ? true : false}>
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
            <input type="email" placeholder="example@enst.dz" />
            <img src={mail} alt="mail" />
            <input type="password" placeholder="*******" />
            <img src={eye} alt="eye" />
            <button>Continue</button>
          </div>
          <div className="dha">
            Don’t have an Account?{" "}
            <span onClick={this.handleRegister}>REGISTER</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SignIn;
