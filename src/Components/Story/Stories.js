import React, { Component } from "react";
import Story from "./Story";
import image from "../../assets/pp.png";
import p2 from "../../assets/pp (2).png";
import p3 from "../../assets/pp (3).png";
import p1 from "../../assets/109943543_3420005031367562_7842161415506186964_o.png";
import p4 from "../../assets/pp (4).png";
class Stories extends Component {
  state = {
    Me: this.props.me,
  };
  render() {
    const { Me } = this.state;
    console.log(Me);
    return (
      <div className="Stories">
        <Story id={"personal_story"} img={Me.photoURL} />
        <Story img={p2} user={"Luz.anzo"} />
        <Story img={p3} user={"Alice_002"} />
        <Story img={p4} user={"Perla_Pipol"} />
        <Story img={p1} user={"Cambray_Style"} />
        <Story img={p4} user={"Perla_Pipol"} />
      </div>
    );
  }
}

export default Stories;
