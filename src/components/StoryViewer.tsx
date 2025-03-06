import React, { useState, useEffect, useCallback } from "react";
import { UserStories } from "../data/stories";
import "../styles/StoryViewer.css";

interface StoryViewerProps {
  allStories: UserStories[];
  initialUserIndex: number;
  onClose: () => void;
}

const StoryViewer: React.FC<StoryViewerProps> = ({
  allStories,
  initialUserIndex,
  onClose,
}) => {
  const [currentUserIndex, setCurrentUserIndex] = useState(initialUserIndex);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const currentUserStories = allStories[currentUserIndex]?.stories || [];
  const currentStory = currentUserStories[currentStoryIndex];

  const goToNextStory = useCallback(() => {
    if (currentStoryIndex < currentUserStories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
      setProgress(0);
      setIsLoading(true);
    } else if (currentUserIndex < allStories.length - 1) {
      setCurrentUserIndex(currentUserIndex + 1);
      setCurrentStoryIndex(0);
      setProgress(0);
      setIsLoading(true);
    } else {
      onClose();
    }
  }, [
    currentStoryIndex,
    currentUserStories.length,
    currentUserIndex,
    allStories.length,
    onClose,
  ]);

  const goToPrevStory = useCallback(() => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
      setProgress(0);
      setIsLoading(true);
    } else if (currentUserIndex > 0) {
      setCurrentUserIndex(currentUserIndex - 1);
      const prevUserStories = allStories[currentUserIndex - 1]?.stories || [];
      setCurrentStoryIndex(prevUserStories.length - 1);
      setProgress(0);
      setIsLoading(true);
    }
  }, [currentStoryIndex, currentUserIndex, allStories]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  // Progress bar timer effect
  useEffect(() => {
    if (isLoading) return;
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          goToNextStory();
          return 0;
        }
        return prevProgress + 100 / 50; // 5 seconds = 50 intervals of 100ms
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isLoading, goToNextStory, progress]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevStory();
      } else if (e.key === "ArrowRight") {
        goToNextStory();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNextStory, goToPrevStory, onClose]);

  if (!currentStory) return null;

  return (
    <div className="story-viewer" data-testid="story-viewer">
      <div className="story-close" onClick={onClose} data-testid="story-close">
        ×
      </div>

      <div className="story-progress-container">
        {currentUserStories.map((_: unknown, index: number) => (
          <div key={index} className="story-progress-bar-background">
            <div
              className="story-progress-bar"
              style={{
                width: `${
                  index === currentStoryIndex
                    ? progress
                    : index < currentStoryIndex
                    ? 100
                    : 0
                }%`,
              }}
            ></div>
          </div>
        ))}
      </div>

      <div className="story-header">
        <div className="story-user-info">
          <img
            src={currentStory.userAvatar}
            alt={`${currentStory.username}`}
            className="story-user-avatar"
          />
          <span className="story-username">{currentStory.username}</span>
          <span className="story-timestamp">{currentStory.timestamp}</span>
        </div>
      </div>

      <div className="story-content">
        {isLoading ? <div className="story-loading">Loading...</div> : null}
        <img
          src={currentStory.imageUrl}
          alt="Story"
          className={`story-image ${isLoading ? "loading" : ""}`}
          onLoad={handleImageLoad}
        />
      </div>

      <div
        className="story-navigation left"
        data-testid="story-prev"
        onClick={goToPrevStory}
      >
        &#8249;
      </div>
      <div
        className="story-navigation right"
        data-testid="story-next"
        onClick={goToNextStory}
      >
        &#8250;
      </div>
    </div>
  );
};

export default StoryViewer;
