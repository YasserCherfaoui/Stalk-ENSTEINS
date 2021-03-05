import React from "react";

const Story = ({ img, id, user }) => {
  console.log(img);
  return (
    <div className="story" id={id}>
      <img src={img} alt="story" />
      {id === "personal_story" && (
        <div className="add_story">
          <span>+</span>
        </div>
      )}
      {id !== "personal_story" && <div className="story_user">{user}</div>}
    </div>
  );
};

export default Story;
