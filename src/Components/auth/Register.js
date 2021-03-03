import React, { Component } from "react";
import persons from "../../assets/User Profile_Monochromatic.svg";
import google from "../../assets/google.svg";
import apple from "../../assets/Path 1903.svg";
import mail from "../../assets/mail.svg";
import eye from "../../assets/show.svg";
import person from "../../assets/user.svg";
class Register extends Component {
  handleLogin = () => {
    window.location.reload();
  };
  render() {
    return (
      <div className="register" hidden={this.props.hidden}>
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
          <input type="text" placeholder="YasserCherfaoui" />
          <img src={person} alt="mail" />
          <input type="email" placeholder="example@enst.dz" />
          <img src={mail} alt="mail" />
          <input type="password" placeholder="*******" />
          <img src={eye} alt="eye" />
          <button>Register</button>
        </div>

        <div className="dha reg">
          Already a Team Member? <span onClick={this.handleLogin}>LOG IN</span>
        </div>
      </div>
    );
  }
}

export default Register;
