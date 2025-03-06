import React from "react";
import { UserStories } from "../data/stories";
import "../styles/StoryCircle.css";

interface StoryCircleProps {
  userStory: UserStories;
  onClick: () => void;
}

const StoryCircle: React.FC<StoryCircleProps> = ({ userStory, onClick }) => {
  return (
    <div className="story-circle" onClick={onClick} data-testid="story-circle">
      <div className="story-circle-border">
        <img
          src={userStory.userAvatar}
          alt={`${userStory.username}'s avatar`}
          className="story-avatar"
        />
      </div>
      <span className="story-username">{userStory.username}</span>
    </div>
  );
};

export default StoryCircle;
