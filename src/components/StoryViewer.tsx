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
  const [isPaused, setIsPaused] = useState(false);

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

  const handlePause = () => setIsPaused(true);
  const handleResume = () => setIsPaused(false);

  // Progress bar timer effect
  useEffect(() => {
    if (isLoading || isPaused) return;
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
  }, [isLoading, isPaused, goToNextStory, progress]);

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

  // preloading next story
  useEffect(() => {
    if (currentStoryIndex < currentUserStories.length - 1) {
      const nextStory = currentUserStories[currentStoryIndex + 1];
      if (nextStory) {
        const img = new Image();
        img.src = nextStory.imageUrl;
      }
    } else if (currentUserIndex < allStories.length - 1) {
      const nextUserStories = allStories[currentUserIndex + 1]?.stories || [];
      if (nextUserStories.length > 0) {
        const nextStory = nextUserStories[0];
        if (nextStory) {
          const img = new Image();
          img.src = nextStory.imageUrl;
        }
      }
    }
  }, [currentStoryIndex, currentUserIndex, allStories, currentUserStories]);

  return (
    <div className="story-viewer" data-testid="story-viewer">
      <div className="story-close" onClick={onClose} data-testid="story-close">
        ×
      </div>

      <div className="story-progress-container">
        {currentUserStories.map((_, index) => (
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

      <div
        className="story-content"
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
        onTouchStart={handlePause}
        onTouchEnd={handleResume}
      >
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
      ></div>
      <div
        className="story-navigation right"
        data-testid="story-next"
        onClick={goToNextStory}
      ></div>
    </div>
  );
};

export default StoryViewer;
