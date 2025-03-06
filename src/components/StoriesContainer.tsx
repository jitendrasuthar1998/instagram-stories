import React, { useState } from "react";
import { storiesData } from "../data/stories";
import StoryCircle from "./StoryCircle";
import StoryViewer from "./StoryViewer";
import "../styles/StoriesContainer.css";

const StoriesContainer: React.FC = () => {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [selectedUserIndex, setSelectedUserIndex] = useState(0);

  const openStoryViewer = (index: number) => {
    setSelectedUserIndex(index);
    setViewerOpen(true);
  };

  const closeStoryViewer = () => {
    setViewerOpen(false);
  };

  return (
    <div className="stories-container" data-testid="stories-container">
      <div className="stories-header">
        <h2>Stories</h2>
      </div>

      <div className="stories-list">
        {storiesData.map((userStory, index) => (
          <StoryCircle
            key={userStory.userId}
            userStory={userStory}
            onClick={() => openStoryViewer(index)}
          />
        ))}
      </div>

      {viewerOpen && (
        <div className="story-viewer-overlay">
          <StoryViewer
            allStories={storiesData}
            initialUserIndex={selectedUserIndex}
            onClose={closeStoryViewer}
          />
        </div>
      )}
    </div>
  );
};

export default StoriesContainer;
