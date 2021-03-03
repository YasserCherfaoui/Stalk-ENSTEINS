import React from "react";
import text from "../../assets/noun_send_1583992.svg";
import option from "../../assets/Path 9.svg";
import heart from "../../assets/Union 1.svg";
import comments from "../../assets/noun_chat_1079099.svg";
const Post = ({ pic, user, time, postpic, likes, liker, likers }) => {
  return (
    <div className="post">
      <div className="post_writer">
        <img src={pic} id="poster" alt="person" />
        <p id="user">{user}</p>
        <p id="time">{time}</p>
        <div className="extra">
          <img src={text} alt="text" />
          <img src={option} id="options" alt="option" />
        </div>
      </div>
      <div className="post_pic">
        <img src={postpic} alt="post" />
      </div>
      <div className="react">
        <div className="heartit">
          <img src={heart} alt="heart" />
        </div>
        <div class="likes">{likes}</div>
        <div className="comment">
          <img src={comments} alt="comments" />
        </div>
      </div>
      <div className="reactions">
        liked by{" "}
        <span>
          {liker} and {likers}
        </span>{" "}
        others
      </div>
    </div>
  );
};

export default Post;
