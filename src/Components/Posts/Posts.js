import React, { Component } from "react";
import Post from "./Post";
import pic from "../../assets/109943543_3420005031367562_7842161415506186964_o.png";
import ppic from "../../assets/covid@2x.png";
class Posts extends Component {
  render() {
    return (
      <div className="posts">
        <Post
          pic={pic}
          user={"YasserCherfaoui"}
          time={"20minutes"}
          postpic={ppic}
          likes={"1770"}
          liker={"Samcodesign"}
          likers={"1002"}
        />
        <Post
          pic={pic}
          user={"YasserCherfaoui"}
          time={"20minutes"}
          postpic={ppic}
          likes={"1770"}
        />
      </div>
    );
  }
}

export default Posts;
