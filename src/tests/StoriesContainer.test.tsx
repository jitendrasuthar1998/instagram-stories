import { render, screen, fireEvent } from "@testing-library/react";
import StoriesContainer from "../components/StoriesContainer";
import { storiesData } from "../data/stories";

describe("StoriesContainer", () => {
  test("renders stories container with story circles", () => {
    render(<StoriesContainer />);

    const container = screen.getByTestId("stories-container");
    expect(container).toBeInTheDocument();

    const storyCircles = screen.getAllByTestId("story-circle");
    expect(storyCircles).toHaveLength(storiesData.length);
  });

  test("opens story viewer when a story circle is clicked", () => {
    render(<StoriesContainer />);

    const storyCircles = screen.getAllByTestId("story-circle");
    fireEvent.click(storyCircles[0]);

    const storyViewer = screen.getByTestId("story-viewer");
    expect(storyViewer).toBeInTheDocument();
  });

  test("closes story viewer when close button is clicked", () => {
    render(<StoriesContainer />);

    const storyCircles = screen.getAllByTestId("story-circle");
    fireEvent.click(storyCircles[0]);

    const closeButton = screen.getByTestId("story-close");
    fireEvent.click(closeButton);

    expect(screen.queryByTestId("story-viewer")).not.toBeInTheDocument();
  });
});
